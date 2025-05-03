import { Component } from '@angular/core';
import dataprecos from '../../../assets/dados/Tabela_com_precos.json';
import datalanchonetes from '../../../assets/datalanchonetes.json';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-comparar-precos',
  imports: [CommonModule],
  templateUrl: './comparar-precos.component.html',
  styleUrl: './comparar-precos.component.css',
  standalone: true
})
export class CompararPrecosComponent {

  itens : any [] = dataprecos;
  lanchonetes : any [] = datalanchonetes.lanchonetes;

  ngOnInit() {
    this.itens.sort((a, b) => a.Item.localeCompare(b.Item));
  }

  getPreco(item: any, nomeLanchonete: string): string | null {
    const preco = item[nomeLanchonete];
    if (!preco || preco === '-') return null;
    return parseFloat(preco).toFixed(2);
  }
}

