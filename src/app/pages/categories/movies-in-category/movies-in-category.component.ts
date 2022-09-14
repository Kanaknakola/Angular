import { Movie } from './../../../models/movie';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { HttpService } from '../../../services/http.service';

@Component({
  selector: 'app-movies-in-category',
  templateUrl: './movies-in-category.component.html',
  styleUrls: ['./movies-in-category.component.css'],
})
export class MoviesInCategoryComponent implements OnInit {
  movies: Observable<Movie[]>;

  constructor(public http: HttpService, private routes: ActivatedRoute) {
  }

  ngOnInit() {
    const category = this.routes.snapshot.paramMap.get('category');
    this.movies = this.http.getMoviesFromCategory(category);
  }
}
