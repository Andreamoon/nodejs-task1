import { Component, OnInit } from '@angular/core';
import { User } from '../../models/Users';
import { UsersService } from '../../services/users.service';

import { Router, ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-edit-users',
  templateUrl: './edit-users.component.html',
  styleUrls: ['./edit-users.component.css']
})
export class EditUsersComponent implements OnInit {
  id: string;
  users: any[];

  client: User = {
    name: "",
    username: "",
    email: "",
    telephone: "",

  }
  constructor(
    public userService: UsersService,
    public route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
  }

  onSubmit() {


    this.userService.editUser(this.id, this.client).subscribe(user => {
      console.log(user)
    })
    this.router.navigate(['/']);
    window.location.reload();



  }

}
