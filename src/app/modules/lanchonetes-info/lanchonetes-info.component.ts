import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import datalanchonetes from '../../../assets/datalanchonetes.json';
import produtos from '../../../assets/dados/Tabela_com_precos.json';
import { CommonModule } from '@angular/common';

interface Lanchonete {
  Nome: string;
  Unidade: string;
  Predio: string;
  linkMapa: string;
}

@Component({
  selector: 'app-lanchonetes-info',
  templateUrl: './lanchonetes-info.component.html',
  styleUrls: ['./lanchonetes-info.component.css'],
  imports: [CommonModule],
})
export class LanchonetesInfoComponent implements OnInit {
  lanchoneteDetalhes: Lanchonete | undefined;
  itens: any[] = [];

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    const nomeLanchonete = this.route.snapshot.paramMap.get('nome');

    
    if (nomeLanchonete) {
      const nomeLanchoneteNormalized = nomeLanchonete.trim().toUpperCase();
      this.lanchoneteDetalhes = datalanchonetes.lanchonetes.find(
        (l) => l.Nome.toUpperCase() === nomeLanchoneteNormalized
       );

      if (this.lanchoneteDetalhes) {
        this.itens = produtos
          .map((produto) => {
            const preco = produto[nomeLanchonete];
            console.log(preco)
            return {
              Item: produto.Item,
              Preco: preco && preco !== '-' ? preco : 'Preço não disponível',
            };
          })
          .filter((item) => item.Preco !== 'Preço não disponível');
      }
    }
  }

  getPreco(item: any, nomeLanchonete: string): string | null {
    const nomeLanchoneteNormalized = nomeLanchonete.trim().toUpperCase();

    if (item.hasOwnProperty(nomeLanchoneteNormalized)) {
      const preco = item[nomeLanchoneteNormalized];
      if (!preco || preco === '-') return null;
      return parseFloat(preco).toFixed(2);
    } else {
      return null;
    }
  }
}
