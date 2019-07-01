import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TwoWaySmallExampleComponent } from './comps/two-way-small-example/two-way-small-example.component';
import { FormsModule } from '@angular/forms';
import { SuperInputComponent } from './comps/super-input/super-input.component';
import { IChangeYouComponent } from './comps/i-change-you/i-change-you.component';
import { TwoWayComponent } from './part2/two-way/two-way.component';
import { MyInputComponent } from './part3/my-input/my-input.component';
import { MyDivComponent } from './part3/my-div/my-div.component'

@NgModule({
  declarations: [
    AppComponent,
    TwoWaySmallExampleComponent,
    SuperInputComponent,
    IChangeYouComponent,
    TwoWayComponent,
    MyInputComponent,
    MyDivComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
