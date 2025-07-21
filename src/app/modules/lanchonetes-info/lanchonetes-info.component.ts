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

interface ItemCardapio {
  Item: string;
  Preco: string | number;
}

@Component({
  selector: 'app-lanchonetes-info',
  templateUrl: './lanchonetes-info.component.html',
  styleUrls: ['./lanchonetes-info.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class LanchonetesInfoComponent implements OnInit {
  lanchoneteDetalhes: Lanchonete | undefined;
  itens: ItemCardapio[] = [];
  searchTerm: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const nomeLanchonete = this.route.snapshot.paramMap.get('nome');

    if (nomeLanchonete) {
      const nomeLanchoneteNormalized = nomeLanchonete.trim().toUpperCase();
      
      // Find the restaurant details
      this.lanchoneteDetalhes = datalanchonetes.lanchonetes.find(
        (l) => l.Nome.toUpperCase() === nomeLanchoneteNormalized
      );

      // Get menu items with prices
      if (this.lanchoneteDetalhes) {
        this.itens = produtos
          .map((produto) => {
            const preco = produto[nomeLanchoneteNormalized];
            return {
              Item: produto.Item,
              Preco: preco && preco !== '-' ? parseFloat(preco).toFixed(2) : 'Preço não disponível',
            };
          })
          .filter((item) => item.Preco !== 'Preço não disponível');
      }
    }
  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.searchTerm = target.value;
  }

  get lanchesFiltrados(): ItemCardapio[] {
    const termo = this.searchTerm.trim().toLowerCase();
    if (!termo) return this.itens;

    return this.itens.filter(item => 
      item.Item.toLowerCase().includes(termo)
    );
  }
}