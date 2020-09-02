import {NgModule} from '@angular/core';
import {MaterialModule} from './material.module';
import {CardComponent} from './components/card/card.component';
import {CommonModule} from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner/spinner.component';
import { ButtonComponent } from './components/button/button/button.component';


@NgModule({
  declarations: [
    CardComponent,
    SpinnerComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CardComponent,
    SpinnerComponent,
    ButtonComponent
  ]
})
export class SharedModule {
}
