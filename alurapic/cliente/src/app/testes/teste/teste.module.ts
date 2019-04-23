import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TesteComponent } from './teste/teste.component';
import { ObjetoComponent } from './objeto/objeto.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TesteComponent, ObjetoComponent]
})
export class TesteModule { }
