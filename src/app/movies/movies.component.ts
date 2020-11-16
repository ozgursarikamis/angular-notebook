import { movies } from './../app.constants';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: { id: string; name: string; release: number; link: string }[];

  constructor() { }

  ngOnInit(): void {
    this.movies = movies;
  }

}
