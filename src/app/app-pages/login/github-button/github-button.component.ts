import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/core/auth.service';
@Component({
  selector: 'github-signin-button',
  templateUrl: './github-button.component.html',
  styleUrls: ['./github-button.component.scss']
})
export class GithubButtonComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
