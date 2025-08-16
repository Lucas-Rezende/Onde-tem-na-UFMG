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
  Normalized: string;
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
  filteredItems: ItemCardapio[] = [];
  searchTerm: string = '';

  private normalizeString(str: string): string {
  return str.normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^\w\s]/gi, '')
            .replace(/\s+/g, ' ')
            .trim()
            .toLowerCase();
}

  constructor(private route: ActivatedRoute) {}

   ngOnInit(): void {
    const nomeLanchonete = this.route.snapshot.paramMap.get('nome');

    if (nomeLanchonete) {
      const nomeLanchoneteNormalized = this.normalizeString(nomeLanchonete);
      
      this.lanchoneteDetalhes = datalanchonetes.lanchonetes.find(
        (l) => this.normalizeString(l.Nome) === nomeLanchoneteNormalized
      );

      if (this.lanchoneteDetalhes) {
        this.itens = produtos
          .map((produto) => {
            const preco = produto[this.lanchoneteDetalhes!.Nome.toUpperCase()];
            return {
              Item: produto.Item,
              Preco: preco && preco !== '-' ? parseFloat(preco).toFixed(2) : 'Preço não disponível',
              Normalized: this.normalizeString(produto.Item) // Corrigido para manter consistência
            };
          })
          .filter((item) => item.Preco !== 'Preço não disponível');
        
        this.filteredItems = [...this.itens];
      }
    }
  }

  

 search(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.searchTerm = target.value;
    
    if (!this.searchTerm.trim()) {
      this.filteredItems = [...this.itens];
      return;
    }

    const searchTermNormalized = this.normalizeString(this.searchTerm);
    
    this.filteredItems = this.itens.filter(item => 
      item.Normalized.includes(searchTermNormalized) // Usando a propriedade corrigida
    );
  }


  get lanchesFiltrados(): ItemCardapio[] {
    if (!this.searchTerm.trim()) {
      return [...this.itens]; // Retorna cópia de todos os itens se não houver busca
    }

    const searchTermNormalized = this.normalizeString(this.searchTerm);
    
    return this.itens.filter(item => 
      item.Normalized.includes(searchTermNormalized) || // Busca na versão normalizada
      item.Item.toLowerCase().includes(this.searchTerm.toLowerCase()) // Busca adicional no texto original
    );
  }
}