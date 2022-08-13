import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { genderPipe } from './heroes/heroes.pipe';
import { empcountComponent } from './employee/employeeCount.component';
import { simpleComponent } from './others/simple.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    genderPipe,
    empcountComponent,
    simpleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
