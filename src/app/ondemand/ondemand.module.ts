import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OndemandComponent} from './ondemand/ondemand.component';
import {RouterModule} from '@angular/router';
import {SecondComponent} from './second/second.component';
import {FirstComponent} from './first/first.component';

let routing = RouterModule.forChild([
  {
    path: '', component: OndemandComponent,
    children: [
      {
        path: '',
        children: [
          {outlet: 'primary', path: '', component: FirstComponent,},
          {outlet: 'left', path: '', component: SecondComponent,},
          {outlet: 'right', path: '', component: SecondComponent,},
        ]
      },
      {
        path: 'swap',
        children: [
          {outlet: 'primary', path: '', component: SecondComponent,},
          {outlet: 'left', path: '', component: FirstComponent,},
          {outlet: 'right', path: '', component: FirstComponent,},
        ]
      },
    ]
  }
]);

@NgModule({
  imports: [CommonModule, routing],
  declarations: [OndemandComponent, SecondComponent, FirstComponent],
  exports: [OndemandComponent]
})
export class OndemandModule {
}
