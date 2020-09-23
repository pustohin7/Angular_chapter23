import {Component, Inject, OnInit} from '@angular/core';
import {Product} from '../../model/product.model';
import {Model} from '../../model/repository.model';
import {MODES, SHARED_STATE, SharedState} from '../sharedState.model';
import {NgForm} from '@angular/forms';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import "rxjs/add/operator/skipWhile";

@Component({
  selector: 'paForm',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  product: Product = new Product();
  lastId: number;
  editing: boolean = false;

  constructor(private model: Model,
              @Inject(SHARED_STATE) public stateEvents: Observable<SharedState>) {
    /* stateEvents
       .map(state => new SharedState(state.mode, state.id == 5 ? 1 : state.id))
       .filter(state => state.id != 3).subscribe((update) => {
       this.product = new Product();
       if (update.id != undefined) {
         Object.assign(this.product, this.model.getProduct(update.id));
       }
       this.editing = update.mode == MODES.EDIT;
     });*/
    stateEvents
      // .skipWhile(state => state.mode == MODES.EDIT)
      // .distinctUntilChanged((firstState, secondState) =>
      //   firstState.mode == secondState.mode && firstState.id == secondState.id)
      .subscribe(update => {
        this.product = new Product();
        if (update.id != undefined) {
          Object.assign(this.product, this.model.getProduct(update.id));
        }
        this.editing = update.mode == MODES.EDIT;
      });
  }

  submitForm(form: NgForm) {
    if (form.valid) {
      this.model.saveProduct(this.product);
      this.product = new Product();
      form.reset();
    }
  }

  resetForm() {
    this.product = new Product();
  }

  ngOnInit(): void {
  }

}
