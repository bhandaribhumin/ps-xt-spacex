import { Component, OnInit } from '@angular/core';
import { SpaceXService } from 'src/app/services/spacex.service';
import { IFilter, IProgram } from 'src/app/shared/madel';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.scss']
})
export class ProgramsComponent implements OnInit {

  constructor(private _spacexService: SpaceXService) { }

  programs: IProgram[] = []

  ngOnInit(){
    this._spacexService.getSpaceXLaunches().subscribe(programs => {
      this.programs = programs;
    })
  }
}
