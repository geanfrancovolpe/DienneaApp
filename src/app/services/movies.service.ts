import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  API_URL = 'https://api.themoviedb.org/3/';
  API_KEY = '798cbe17c36f856313c79b9963a08fa0';

  constructor( private http: HttpClient ) { }

  getAllMovies(){
    return this.http.get( `${ this.API_URL }discover/movie?api_key=${ this.API_KEY }` );
  }
  
}

