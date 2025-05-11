import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CompararPrecosService {

  constructor() {}

  calcularPrecoMedio(item: any, lanchonetes: any[]): number {
    const precos = lanchonetes
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

  calcularLanchoneteComMenorMedia(itens: any[], lanchonetes: any[]): string | null {
    const medias: { [nome: string]: number[] } = {};

    for (let item of itens) {
      for (let l of lanchonetes) {
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

    return nomeLanchonete;
  }

  calcularLanchoneteComMenorPreco(item: any, lanchonetes: any[]): { nome: string | null, preco: number | null } {
    let menorPreco = Infinity;
    let lanchonete = null;

    for (let l of lanchonetes) {
      const precoStr = item[l.Nome];
      if (precoStr && precoStr !== '-') {
        const preco = parseFloat(precoStr);
        if (preco < menorPreco) {
          menorPreco = preco;
          lanchonete = l.Nome;
        }
      }
    }

    return { nome: lanchonete, preco: menorPreco === Infinity ? null : menorPreco };
  }

  ordenarItens(itens: any[], modo: 'alfabetica' | 'precoMedio', lanchonetes: any[]): any[] {
    if (modo === 'alfabetica') {
      return itens.sort((a, b) => a.Item.localeCompare(b.Item));
    } else {
      return itens.sort(
        (a, b) => this.calcularPrecoMedio(a, lanchonetes) - this.calcularPrecoMedio(b, lanchonetes)
      );
    }
  }

  getItemId(item: any): string {
    return 'item-' + item.Item.replace(/\s+/g, '-');
  }
}
