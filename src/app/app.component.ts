import { Component } from '@angular/core';
import {LogService} from './services/log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private logger: LogService){
    this.logger.ToSay("CONSTRUCTEUR de APP");
    console.log(LogService.nbInstance);
  }
}
