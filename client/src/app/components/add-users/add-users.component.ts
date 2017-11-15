import { Component, OnInit } from '@angular/core';
import { User } from '../../models/Users';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css'],

})
export class AddUsersComponent implements OnInit {
  users: any[];
  client: User = {
    name: "",
    username: "",
    email: "",
    telephone: "",

  }
  constructor(public userService: UsersService,
    public router: Router) { }

  ngOnInit() {
  }

  onSubmit() {

    this.userService.addUser(this.client).subscribe(user => {
      this.users = user

    })
    this.router.navigate(['/']);
    window.location.reload();
  }

}
