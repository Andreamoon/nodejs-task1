import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Subject } from 'rxjs/Subject';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  results: Object;
  searchTerm$ = new Subject<string>();

  constructor(private searchService: SearchService) {
    this.searchService.search(this.searchTerm$)
      .subscribe(results => {
        this.results = results.results;
        console.log(this.searchTerm$)
      });
  }

  ngOnInit() {
  }

}
