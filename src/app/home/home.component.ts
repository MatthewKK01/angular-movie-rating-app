import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) { }
  trendingMovies: any
  theatreMovies: any
  popularMovies: any;

  ngOnInit() {
    this.getTrangingMovies()
    this.getTheatreMovies()
    this.getPopularMovies()
  }


  getTrangingMovies() {
    this.http.get("http://localhost:4200/assets/data/trending-movies.json").subscribe((movies) => {
      this.trendingMovies = movies;
      console.log("Trending Movies: ", this.trendingMovies)
    })
  }

  getTheatreMovies() {
    this.http.get("http://localhost:4200/assets/data/theatre-movies.json").subscribe((movies) => {
      this.theatreMovies = movies;
      console.log("Theatre Movies: ", this.theatreMovies)
    })
  }
  getPopularMovies() {
    this.http.get("http://localhost:4200/assets/data/popular-movies.json").subscribe((movies) => {
      this.popularMovies = movies;
      console.log("Popular Movies: ", this.popularMovies)
    })
  }
  goToMovie(type: string, id: string) {
    this.router.navigate(['movie', type, id]); // navigate to : movie/type/id
  }
}
