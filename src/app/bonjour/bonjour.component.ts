import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterLinkActive} from '@angular/router';
import {LogService} from '../services/log.service';

@Component({
  selector: 'app-bonjour',
  templateUrl: './bonjour.component.html',
  styleUrls: ['./bonjour.component.css']
})
export class BonjourComponent implements OnInit {
  name: string;
  job: string;
  constructor(private route: ActivatedRoute, private logger: LogService) {
    this.logger.ToSay("CONSTRUCTEUR => BONJOUR");
    console.log(LogService.nbInstance);
  }

  ngOnInit() {
    this.logger.ToSay("ON_INIT => BONJOUR");
    this.route.params.subscribe( (params) => {
      this.name = params["nom"];
      this.job = params["metier"];
    });
    this.logger.LogNom(this.name);
  }

}
