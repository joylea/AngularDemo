import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {UserDetail} from '../user-detail';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {
  listFilter: string;
  userName: string;
  userDetail: UserDetail;
  users: UserDetail[] = [];
  selectedUserRow: number;
  constructor(private _route: ActivatedRoute,
              private _router: Router) { }

  ngOnInit() {
    if (sessionStorage.getItem('username'))  {
      this.userName = sessionStorage.getItem('username');
    }
    this.users = [];
    this.userDetail = new UserDetail;
    this.getUsers();
  }

  getUsers() {
    this.users = [{
      employeeId: '111',
      firstName: 'aa',
      middleName: '',
      lastName: 'aaa',
      emailAddress: 'aa.aaa@aaa.com',
      roleType: 'Admin'
    }, {
      employeeId: '222',
      firstName: 'bb',
      middleName: '',
      lastName: 'bbb',
      emailAddress: 'bb.bbb@bbb.com',
      roleType: 'User'
    }, {
      employeeId: '123',
      firstName: 'ccc',
      middleName: '',
      lastName: 'cc',
      emailAddress: 'ccc.cc@ccc.com',
      roleType: 'Admin'
    }];
    this.userDetail = this.users[0];
    this.selectedUserRow = 0;
  }

  logout(): void {
    sessionStorage.removeItem('username');
    this._router.navigateByUrl('login');
  }

  onSelectedUserChange(selectedUser: UserDetail, selectedRow: number) {
    this.userDetail = selectedUser;
    this.selectedUserRow = selectedRow;
  }

  isNumberValid(numberInput: number, numberInput2: number): boolean {
    if (numberInput == numberInput2) {
      return true;
    } else {
      return false;
    }
  }
}
