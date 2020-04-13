import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilmRoutingModule } from './film-routing.module';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import {YouTubePlayerModule} from '@angular/youtube-player';
import { CreateComponent } from './create/create.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [ListComponent, DetailComponent, CreateComponent],
  imports: [
    CommonModule,
    FilmRoutingModule,
    YouTubePlayerModule,
    ReactiveFormsModule
  ]
})
export class FilmModule { }
