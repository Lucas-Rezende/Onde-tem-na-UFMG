import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tabela-precos',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './tabela-precos.component.html'
})

export class TabelaPrecosComponent {
  @Input() dados: any[] = [];
  @Input() colunas: string[] = [];
}