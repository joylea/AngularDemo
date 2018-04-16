import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string;
  constructor(private _route: ActivatedRoute,
              private _router: Router) { }

  ngOnInit() {
    this.userName = '';
  }

  login(): void {
    sessionStorage.setItem('username', this.userName);
    this._router.navigateByUrl('user');
  }

  checkUserName(): string {
    let result = '';
      if ( this.userName !== '' && this.userName.length < 3 ) {
        result = 'login name need larger than 3 characters';
      }
    return result;
  }
}
