import { Component, Input, OnInit } from '@angular/core';
import { program } from 'src/app/services/spacex.service';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss']
})
export class ProgramComponent implements OnInit {
 @Input() program: program;
  constructor() { }

  ngOnInit(): void {
  }

}
