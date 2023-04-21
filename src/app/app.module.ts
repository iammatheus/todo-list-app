import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { TagService } from './services/tag.service';
import { TagComponent } from './components/tag/tag.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TagComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    TagService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
