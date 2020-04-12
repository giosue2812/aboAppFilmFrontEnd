import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';
import {FilmListModel} from '../../models/Film.list.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {FilmDetailModel} from '../../models/Film.detail.model';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  filmListSubject = new Subject<FilmListModel[]>();
  filmDetailSubject = new Subject<FilmDetailModel>();

  private filmLists = [];
  private filmDetail: any;

  constructor(private httpClient: HttpClient) { }

  emitFilmSubject(){
    this.filmListSubject.next(this.filmLists.slice());
  }

  emitFilmDetailSubject(){
    this.filmDetailSubject.next(this.filmDetail);
  }

  getFilmsList(){
    this.httpClient
      .get<any[]>(environment.url+'/films')
      .subscribe(
        (data) => {
          this.filmLists = data;
          this.emitFilmSubject();
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      )
  }

  getFilmDetail(id: number){
    this.httpClient
      .get(environment.url+'/films/detail/'+id)
      .subscribe(
        (data:any) => {
          this.filmDetail = data || null;
          this.emitFilmDetailSubject();
        },
        (error) => {
          console.log('Erreur ! :' + error)
        }
      )
  }
}
