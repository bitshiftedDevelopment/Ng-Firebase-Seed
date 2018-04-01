import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/core/auth.service';
@Component({
  selector: 'twitter-signin-button',
  templateUrl: './twitter-button.component.html',
  styleUrls: ['./twitter-button.component.scss']
})
export class TwitterButtonComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
