import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/Users';


@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {
  id: string;

  user: User = {
    name: "",
    username: "",
    email: "",
    telephone: "",

  }

  constructor(public userService: UsersService,
    public router: Router,
    public route: ActivatedRoute

  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    this.userService.getUser(this.id).subscribe(user => {
      this.user = user;
      console.log(this.user)
    })
  }
  onDeleteClick() {
    this.userService.deleteUser(this.id).subscribe(res => {
      console.log('utente eliminato')
    })
    this.router.navigate(['/']);
    window.location.reload();
  }
}
