import {Component, OnInit} from '@angular/core';
import {Model} from '../../model/repository.model';
import {Product} from '../../model/product.model';

@Component({
  selector: 'paTable',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private model: Model) { }

  getProduct(key: number): Product {
    return this.model.getProduct(key);
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  deleteProduct(key: number) {
    this.model.deleteProduct(key);
  }

  ngOnInit(): void {
  }

}
