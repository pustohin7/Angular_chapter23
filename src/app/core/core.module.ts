import {BrowserModule} from '@angular/platform-browser';
import {TableComponent} from './table/table.component';
import {FormsModule} from '@angular/forms';
import {ModelModule} from '../model/model.module';
import {FormComponent} from './form/form.component';
import {NgModule} from '@angular/core';
import {StatePipe} from './state.pipe';
import {MessageModule} from '../messages/message.module';
import {RouterModule} from '@angular/router';
import { ProductCountComponent } from './product-count/product-count.component';
import { CategoryCountComponent } from './category-count/category-count.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ModelModule, MessageModule, RouterModule],
  declarations: [TableComponent, FormComponent, StatePipe, ProductCountComponent, CategoryCountComponent, NotFoundComponent],
  exports: [ModelModule, TableComponent, FormComponent],
})
export class CoreModule {
}
