import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import * as moment from 'moment';
import { LinkService } from 'src/app/shared/services/link-service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  shortenLink: any;
  linkCreated = false;
  constructor(
    private linkServ: LinkService
  ) { }

  ngOnInit(): void {
    this.linkServ.updateUrlData();
  }

  onSubmit(createUrl: any): any {
    this.shortenLink = "id" + Math.random().toString(19).slice(9);
    if (createUrl.valid) {
      this.linkCreated = true;
      this.linkServ.addLink(createUrl.value.url, this.shortenLink, moment(new Date()).add(5, 'm').toDate());
      confirm("Shorten Url Created successfully")
    }
    this.linkServ.updateUrlData();
  }

}
