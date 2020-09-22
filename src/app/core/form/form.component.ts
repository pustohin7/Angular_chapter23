import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product.model';
import {Model} from '../../model/repository.model';
import {MODES, SharedState} from '../sharedState.model';
import {NgForm} from '@angular/forms';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'paForm',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  product: Product = new Product();

  constructor(private model: Model,
              private state: SharedState) {
  }

  get editing(): boolean {
    // tslint:disable-next-line:triple-equals
    return this.state.mode == MODES.EDIT;
  }

  // tslint:disable-next-line:typedef
  submitForm(form: NgForm) {
    if (form.valid) {
      this.model.saveProduct(this.product);
      this.product = new Product();
      form.reset();
    }
  }

  // tslint:disable-next-line:typedef
  resetForm() {
    this.product = new Product();
  }

  ngOnInit(): void {
  }

}
