import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonPipe } from './pipes/common.pipe';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, CommonPipe],
  imports: [],
  exports: [HeaderComponent, FooterComponent, CommonPipe],
})
export class SharedModule {}
