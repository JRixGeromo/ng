import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UiSwitchModule } from 'angular2-ui-switch';
import { Ng2MultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { SelectSectionComponent } from './multiclient/select-section';
import { ClientSectionComponent } from './multiclient/client-section.component';
import { MultipleClientComponent } from './multiclient/select/multiple-client';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from "./app.component";

@NgModule({
    declarations: [
        AppComponent,
        ClientSectionComponent,
        MultipleClientComponent,
        SelectSectionComponent
    ],
    imports: [FormsModule,
        ReactiveFormsModule, BrowserModule, UiSwitchModule, Ng2MultiSelectDropDownModule.forRoot()],
    bootstrap: [AppComponent]
})
export class AppModule {

}