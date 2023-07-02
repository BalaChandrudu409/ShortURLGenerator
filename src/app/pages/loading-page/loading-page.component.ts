import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LinkService } from 'src/app/shared/services/link-service';

@Component({
  selector: 'app-loading-page',
  templateUrl: './loading-page.component.html',
  styleUrls: ['./loading-page.component.scss']
})
export class LoadingPageComponent implements OnInit {

  constructor(
    private linkServ: LinkService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    let link = this.linkServ.getLink(this.route.snapshot.params.shortenurl);
    window.location.href = link?.originalUrl;
  }
}
