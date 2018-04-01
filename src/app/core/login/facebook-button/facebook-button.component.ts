import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/core/auth.service';
@Component({
  selector: 'facebook-signin-button',
  templateUrl: './facebook-button.component.html',
  styleUrls: ['./facebook-button.component.scss']
})
export class FacebookButtonComponent implements OnInit {

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
