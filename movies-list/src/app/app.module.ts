import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MovieslistComponent } from './movieslist/movieslist.component';
import { orderByPipe } from './orderby';
import { FilterPipeModule } from 'ngx-filter-pipe'; // <-- Import


@NgModule({
  declarations: [
    AppComponent,
    MovieslistComponent,
    orderByPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FilterPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
