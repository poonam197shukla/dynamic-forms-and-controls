import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicFieldComponent } from './components/dynamic-field/dynamic-field.component';
import { DynamicCheckboxesComponent } from './components/dynamic-field/dynamic-checkboxes/dynamic-checkboxes.component';
import { DynamicSelectComponent } from './components/dynamic-field/dynamic-select/dynamic-select.component';
import { DynamicInputComponent } from './components/dynamic-field/dynamic-input/dynamic-input.component';
import { DynamicRadioComponent } from './components/dynamic-field/dynamic-radio/dynamic-radio.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { DynamicErrorComponent } from './components/dynamic-form/dynamic-error/dynamic-error.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFieldComponent,
    DynamicCheckboxesComponent,
    DynamicSelectComponent,
    DynamicInputComponent,
    DynamicRadioComponent,
    DynamicFormComponent,
    DynamicErrorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
