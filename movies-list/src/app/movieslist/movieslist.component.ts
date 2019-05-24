import { Component, OnInit, } from '@angular/core';
import { ConfigService } from '../config.service';
import { FilterPipe } from 'ngx-filter-pipe';

@Component({
  selector: 'app-movieslist',
  templateUrl: './movieslist.component.html',
  styleUrls: ['./movieslist.component.css']
})
export class MovieslistComponent implements OnInit {
  moviesList:any = [];
  moviesLisfFilter:any = {vote_average:''};
  constructor(public config:ConfigService, private filterPipe:FilterPipe) { }

  ngOnInit() {
    this.getMoviesList();
  }
  
  getMoviesList(){
    this.moviesList = [];
    this.config.getMoviesList().subscribe((data: {})=>{
      console.log(data);
      this.moviesList = data;
    })
  }
}
