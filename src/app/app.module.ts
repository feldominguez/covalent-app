import { BrowserModule, DomSanitizer } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { MdCardModule, MdIconModule, MdButtonModule, MdIconRegistry, MdIcon, MdListModule } from '@angular/material';


import { CovalentLayoutModule, CovalentStepsModule, CovalentCommonModule } from '@covalent/core';
import { CovalentHttpModule } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';

import 'hammerjs';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    MdCardModule,
    CommonModule,
    CovalentHttpModule.forRoot(),
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentDynamicFormsModule,
    MdButtonModule,
    MdIconModule,
    MdListModule,
    CovalentCommonModule
  ],
  providers: [MdIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule { }
