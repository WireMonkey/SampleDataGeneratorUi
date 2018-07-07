import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {AccordionModule} from 'primeng/accordion';
import {DragDropModule} from 'primeng/dragdrop';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {TooltipModule} from 'primeng/tooltip';
import {DropdownModule} from 'primeng/dropdown';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppComponent } from './app.component';
import { ColumnCardComponent } from './column-card/column-card.component';

@NgModule({
  declarations: [
    AppComponent,
    ColumnCardComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    AccordionModule,
    DragDropModule,
    AutoCompleteModule,
    TooltipModule,
    DropdownModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
