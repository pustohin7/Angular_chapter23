import {BrowserModule} from '@angular/platform-browser';
import {TableComponent} from './table/table.component';
import {FormsModule} from '@angular/forms';
import {ModelModule} from '../model/model.module';
import {FormComponent} from './form/form.component';
import {SharedState} from './sharedState.model';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [BrowserModule, FormsModule, ModelModule],
  declarations: [TableComponent, FormComponent],
  exports: [ModelModule, TableComponent, FormComponent],
  providers: [SharedState]
})
export class CoreModule {
}
