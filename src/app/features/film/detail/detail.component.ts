import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {FilmService} from '../../../core/services/film/film.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  detailSuscription: Subscription;

  detail: string;

  constructor(private filmService: FilmService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.detailSuscription = this.filmService.filmDetailSubject.subscribe(
      (data: any) => {
        this.detail = data;
      },
      (error) => {
        console.log(error);
      }
    );
    this.filmService.getFilmDetail(this.router.snapshot.params['id']);
  }
}
