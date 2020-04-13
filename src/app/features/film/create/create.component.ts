import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  filmForm = new FormGroup({
    titleName: new FormControl(),
    descritpion: new FormControl(),
    dateDeSortie: new FormControl(),
    realisateur: new FormControl(),
    casting: new FormControl(),
    image: new FormControl(),
    bandeAnnoce: new FormControl()

  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.filmForm);
  }

}
