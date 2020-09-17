import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IFilter, IProgram } from '../shared/madel';




@Injectable({
     providedIn:'root'
})
export class SpaceXService {
    
    constructor(private _http: HttpClient) { }    
 
    getSpaceXLaunches(filterQuery?:IFilter){
        console.log('url');
        let url = environment.url;
        if(filterQuery){
           if(filterQuery.launchSuccess !== undefined){
               url = url + `&launch_success=${filterQuery.launchSuccess}`;
           }
           if(filterQuery.landSuccess !== undefined){
            url = url + `&land_success=${filterQuery.landSuccess}`;
        }
        if(filterQuery.launchYear !== undefined){
            url = url + `&launch_year=${filterQuery.launchYear}`;
        }
        } 
        console.log("url ", url);
      return this._http.get(url)
      .pipe(
          map((res: []) => {
            console.log("inside map url", url);
            let temp: IProgram[] = []
             res.forEach((value: any) => {
             temp.push({
                     title: value.mission_name,
                     image: value.links.mission_patch_small,
                     launchYear: value.launch_year,
                     launchSuccess: value.launch_success
                 })
             })
             return temp;
          })
      )
    }

    

   
}
