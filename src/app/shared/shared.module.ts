import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonPipe } from './pipes/common.pipe';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './components/reactive-form/reactiveForm.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CommonPipe,
    FormComponent,
    ReactiveFormComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    CommonPipe,
    FormComponent,
    ReactiveFormComponent,
  ],
})
export class SharedModule {}
