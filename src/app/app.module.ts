import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProgramsComponent } from './containers/programs/programs.component';
import { FilterComponent } from './components/filter/filter.component';
import { ProgramComponent } from './components/program/program.component';

@NgModule({
  declarations: [
    AppComponent,
    ProgramsComponent,
    FilterComponent,
    ProgramComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
