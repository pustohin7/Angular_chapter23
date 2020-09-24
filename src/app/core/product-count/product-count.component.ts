import {ChangeDetectorRef, Component, KeyValueDiffer, KeyValueDiffers, OnInit} from '@angular/core';
import {Model} from '../../model/repository.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-count',
  templateUrl: './product-count.component.html',
  styleUrls: ['./product-count.component.css']
})
export class ProductCountComponent implements OnInit {
  // @ts-ignore
  private differ: KeyValueDiffer;
  count: number = 0;
  private category: string;

  constructor(private model: Model,
              private keyValueDiffers: KeyValueDiffers,
              private changeDetector: ChangeDetectorRef,
              activeRoute: ActivatedRoute) {
    activeRoute.pathFromRoot.forEach(route => route.params.subscribe(params => {
      if (params['category'] != null) {
        this.category = params['category'];
        this.updateCount();
      }
    }));
  }

  ngOnInit() {
    // @ts-ignore
    this.differ = this.keyValueDiffers.find(this.model.getProducts()).create(this.changeDetector);
  }

  ngDoCheck() {
    if (this.differ.diff(this.model.getProducts()) != null) {
      this.updateCount();
    }
  }

  private updateCount() {
    this.count = this.model.getProducts()
      .filter(p => this.category == null || p.category == this.category)
      .length;
  }
}
