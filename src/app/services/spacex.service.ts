import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { map, tap } from 'rxjs/operators';

export interface program {
    image: string;
    title: string;    
    launchYear: string;
    launchSuccess: boolean;
}

@Injectable({
     providedIn:'root'
})
export class SpaceXService {
    constructor(private _http: HttpClient) { }
    getSpaceXLaunches(){
      return this._http.get('https://api.spacexdata.com/v3/launches?limit=100')
      .pipe(
          map((res: []) => {
            let temp: program[] = []
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
      );
    }


   
}
