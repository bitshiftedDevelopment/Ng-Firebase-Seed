import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/core/auth.service';
@Component({
  selector: 'google-signin-button',
  templateUrl: './google-button.component.html',
  styleUrls: ['./google-button.component.scss']
})
export class GoogleButtonComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
