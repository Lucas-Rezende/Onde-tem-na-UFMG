import { Component } from '@angular/core';
import dataprecos from '../../../assets/dados/Tabela_com_precos.json';
import datalanchonetes from '../../../assets/datalanchonetes.json';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comparar-precos',
  imports: [CommonModule],
  templateUrl: './comparar-precos.component.html',
  styleUrls: ['./comparar-precos.component.css'],
  standalone: true,
})
export class CompararPrecosComponent {
  itens: any[] = dataprecos;
  lanchonetes: any[] = datalanchonetes.lanchonetes;
  modoVisualizacao: 'alfabetica' | 'precoMedio' = 'alfabetica';

  lanchoneteMenorMedia: string | null = null;

  itemSelecionado: string = '';
  lanchoneteComMenorPreco: string | null = null;
  menorPreco: number | null = null;

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
    if (this.modoVisualizacao === 'alfabetica') {
      this.itens.sort((a, b) => a.Item.localeCompare(b.Item));
    } else {
      this.itens.sort(
        (a, b) => this.calcularPrecoMedio(a) - this.calcularPrecoMedio(b)
      );
    }
  }

  calcularPrecoMedio(item: any): number {
    const precos = this.lanchonetes
      .map((l) => item[l.Nome])
      .filter((preco) => preco && preco !== '-')
      .map((preco) => parseFloat(preco));

    if (precos.length === 0) return Infinity;
    return precos.reduce((sum, preco) => sum + preco, 0) / precos.length;
  }

  getPreco(item: any, nomeLanchonete: string): string | null {
    const preco = item[nomeLanchonete];
    if (!preco || preco === '-') return null;
    return parseFloat(preco).toFixed(2);
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

    let menorPreco = Infinity;
    let lanchonete = null;

    for (let l of this.lanchonetes) {
      const precoStr = item[l.Nome];
      if (precoStr && precoStr !== '-') {
        const preco = parseFloat(precoStr);
        if (preco < menorPreco) {
          menorPreco = preco;
          lanchonete = l.Nome;
        }
      }
    }

    this.lanchoneteComMenorPreco = lanchonete;
    this.menorPreco = menorPreco === Infinity ? null : menorPreco;
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
    const medias: { [nome: string]: number[] } = {};

    for (let item of this.itens) {
      for (let l of this.lanchonetes) {
        const precoStr = item[l.Nome];
        if (precoStr && precoStr !== '-') {
          const preco = parseFloat(precoStr);
          if (!medias[l.Nome]) {
            medias[l.Nome] = [];
          }
          medias[l.Nome].push(preco);
        }
      }
    }

    let menorMedia = Infinity;
    let nomeLanchonete: string | null = null;

    for (let nome in medias) {
      const media =
        medias[nome].reduce((a, b) => a + b, 0) / medias[nome].length;
      if (media < menorMedia) {
        menorMedia = media;
        nomeLanchonete = nome;
      }
    }

    this.lanchoneteMenorMedia = nomeLanchonete;
  }
}
