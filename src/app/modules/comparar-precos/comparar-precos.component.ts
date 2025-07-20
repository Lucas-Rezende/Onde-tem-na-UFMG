import dataprecos from '../../../assets/dados/Tabela_com_precos.json';
import datalanchonetes from '../../../assets/datalanchonetes.json';

import { CompararPrecosService } from './../../services/CompararPrecos/comparar-precos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comparar-precos',
  imports: [],
  templateUrl: './comparar-precos.component.html',
  styleUrls: ['./comparar-precos.component.css'],
  standalone: true,
})
export class CompararPrecosComponent implements OnInit {
  itens: any[] = dataprecos;
  lanchonetes: any[] = datalanchonetes.lanchonetes;
  modoVisualizacao: 'alfabetica' | 'precoMedio' = 'alfabetica';

  lanchoneteMenorMedia: string | null = null;
  itemSelecionado: string = '';
  lanchoneteComMenorPreco: string | null = null;
  menorPreco: number | null = null;

  constructor(private compararPrecosService: CompararPrecosService) {}

  ngOnInit() {
    this.ordenarItens();
    this.calcularLanchoneteComMenorMedia();
  }

  toggleModoVisualizacao() {
    this.modoVisualizacao =
      this.modoVisualizacao === 'alfabetica' ? 'precoMedio' : 'alfabetica';
    this.ordenarItens();
  }

  ordenarItens() {
    this.itens = this.compararPrecosService.ordenarItens(this.itens, this.modoVisualizacao, this.lanchonetes);
  }

  calcularPrecoMedio(item: any): number {
    return this.compararPrecosService.calcularPrecoMedio(item, this.lanchonetes);
  }

  getPreco(item: any, nomeLanchonete: string): string | null {
    return this.compararPrecosService.getPreco(item, nomeLanchonete);
  }

  destacarItem(event: Event) {
    const target = event.target as HTMLSelectElement;
    const selectedValue = target.value;

    this.itemSelecionado = selectedValue;
    const item = this.itens.find((i) => i.Item === selectedValue);

    if (!item) {
      this.lanchoneteComMenorPreco = null;
      this.menorPreco = null;
      return;
    }

    const result = this.compararPrecosService.calcularLanchoneteComMenorPreco(item, this.lanchonetes);
    this.lanchoneteComMenorPreco = result.nome;
    this.menorPreco = result.preco;
  }

  isMenorPreco(item: any, lanchonete: string): boolean {
    return (
      item.Item === this.itemSelecionado &&
      lanchonete === this.lanchoneteComMenorPreco
    );
  }

  isLanchonete(lanchonete: string): boolean {
    return lanchonete === this.lanchoneteComMenorPreco;
  }

  calcularLanchoneteComMenorMedia() {
    this.lanchoneteMenorMedia = this.compararPrecosService.calcularLanchoneteComMenorMedia(this.itens, this.lanchonetes);
  }

  getItemId(item: any): string {
    return this.compararPrecosService.getItemId(item);
  }

  irParaItem() {
    const id = 'item-' + this.itemSelecionado.replace(/\s+/g, '-');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
}
