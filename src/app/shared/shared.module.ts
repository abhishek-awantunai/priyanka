import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonPipe } from './pipes/common.pipe';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './components/reactive-form/reactiveForm.component';
import { DynamicTableComponent } from './components/dynamic-table/dynamic-table.component';
import { HttpClientModule } from '@angular/common/http';
import { DynamictableService } from './components/dynamic-table/dynamic.service';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    CommonPipe,
    FormComponent,
    ReactiveFormComponent,
    DynamicTableComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  exports: [
    HeaderComponent,
    FooterComponent,
    CommonPipe,
    FormComponent,
    ReactiveFormComponent,
    DynamicTableComponent,
  ],
  providers: [DynamictableService],
})
export class SharedModule {}
