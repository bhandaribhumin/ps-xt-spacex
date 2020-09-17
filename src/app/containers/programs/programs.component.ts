import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SpaceXService } from 'src/app/services/spacex.service';
import { IFilter, IProgram } from 'src/app/shared/madel';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {
  public loading$: Observable<boolean>;
  public programs$: Observable<any[]>;
  constructor(private _spacexService: SpaceXService) { }

  programs: IProgram[] = []

  ngOnInit(){
    this.loading$ = this._spacexService.isLoading;
    this.programs$ = this._spacexService.spaceXData;
    this.programs$.subscribe(programs => {
      console.log(programs);
    },(error)=>console.log('error',error))
    this._spacexService.getSpaceXLaunches().subscribe(programs => {
      this.programs = programs;
    },(error)=>console.log('error',error))
  }
}
