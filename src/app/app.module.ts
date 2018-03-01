import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {Routes, RouterModule} from '@angular/router';
import { BonjourComponent } from './bonjour/bonjour.component';
import {LogService} from './services/log.service';

const routing: Routes = [
  {path: "home", component: AppComponent},
  {path: "bonjour/:nom/:metier", component: BonjourComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    BonjourComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routing)
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
