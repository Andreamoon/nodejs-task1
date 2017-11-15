import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
//import { FilterArrayPipe } from '../../Pipe/filter.pipe';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],


})
export class UsersComponent implements OnInit {
  users: any;
  constructor(public dataService: UsersService,
    public router: Router) {



  }

  ngOnInit() {
    this.dataService.getUsers().subscribe(users => {
      // console.log(users.data[0]._id)
      this.users = users.data;
    });



  }


}


