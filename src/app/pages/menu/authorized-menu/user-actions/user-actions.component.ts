import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-actions',
  templateUrl: './user-actions.component.html',
  styleUrls: ['./user-actions.component.css']
})
export class UserActionsComponent implements OnInit {
  isChecked : boolean = false;
  isValidChecked: boolean = true;
  userTypes = ['Öğrenci','Veli','Öğretmen'];
  radioButton: string = 'radioButton'
  users: User [] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers('users');
  }

  getUsers = (path: string) => this.userService.getUsers(path).subscribe( users => this.users = users)

  filterUsers = (userType : string) => this.users = this.users.filter( users => users.type === userType)

}
