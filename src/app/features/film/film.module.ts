import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmRoutingModule } from './film-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import {YouTubePlayerModule} from '@angular/youtube-player';

@NgModule({
  declarations: [ListComponent, DetailComponent],
  imports: [
    CommonModule,
    FilmRoutingModule,
    YouTubePlayerModule
  ]
})
export class FilmModule { }
