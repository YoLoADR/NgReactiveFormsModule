import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  formGroupMovie: FormGroup;

  constructor(public fb: FormBuilder) { }

  ngOnInit() {
    // this.formGroupMovie = new FormGroup({
    //   movieTitle: new FormControl(),
    //   movieDirector: new FormControl()
    // });

    // #1 Definir des valeur par default #2 Champs Obligatoire
    this.formGroupMovie = this.fb.group({
      movieTitle: ['', Validators.required],
      movieDirector: ['']
    });
  }

  onMovieSubmit() {
    console.log(this.formGroupMovie);
  }
  // On mis un champs obligatoire sur MovieTitle, si il est vide le boutons ajouter s'efface 
  inputIsValid(){
    if(this.formGroupMovie.controls.movieTitle.status == "INVALID"){
      return false;
    }else{
      return true;
    }
  }

}
