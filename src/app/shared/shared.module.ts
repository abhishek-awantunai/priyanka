import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonPipe } from './pipes/common.pipe';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, CommonPipe, FormComponent],
  imports: [CommonModule, FormsModule],
  exports: [HeaderComponent, FooterComponent, CommonPipe, FormComponent],
})
export class SharedModule {}
