import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UiSwitchModule } from 'angular2-ui-switch';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";

@NgModule({
    declarations: [
        AppComponent,

    ],
    imports: [FormsModule,
        ReactiveFormsModule, BrowserModule, UiSwitchModule,],
    bootstrap: [AppComponent]
})
export class AppModule {

}