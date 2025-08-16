import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import dataprecos from '../../../assets/dados/TabelaPrecosComponent.json';
import datalanchonetes from '../../../assets/datalanchonetes.json';

@Component({
  selector: 'app-tabela-precos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabela-precos.component.html',
})
export class TabelaPrecosComponent implements OnInit {
  lanchonetes: Lanchonete[] = [];
  itens: ItemPreco[] = [];
  lanchoneteCompleta: LanchoneteCompleta[] = [];

  ngOnInit() {
    this.lanchonetes = datalanchonetes.lanchonetes;
    this.itens = dataprecos.precos;
    
    this.processarDados();
  }

  processarDados() {
    this.lanchoneteCompleta = this.lanchonetes.map(lanchonete => {
      const nomeNormalizado = this.normalizarNomeLanchonete(lanchonete.Nome);
      
      const itensDaUnidade = this.itens.map(item => ({
        nomeItem: item.Item,
        valor: item[nomeNormalizado] || 'Não disponível'
      }));

      return {
        Nome: lanchonete.Nome,
        local: lanchonete.local || 'Local não especificado',
        linkMapa: lanchonete.linkMapa,
        itens: itensDaUnidade
      };
    });
  }

  private normalizarNomeLanchonete(nome: string): string {
    const mapeamento: {[key: string]: string} = {
      'Lanchonete Coltec': 'COLTEC',
      'Lanchonete Praça de Serviço': 'Praça S',
      // Adicione outros mapeamentos necessários
    };

    return mapeamento[nome] || 
           nome.toUpperCase()
               .replace('LANCHONETE ', '')
               .replace(' ', '');
  }
}

interface Lanchonete {
  Nome: string;
  Unidade?: string;
  local?: string;
  linkMapa?: string;
}

interface ItemPreco {
  Item: string;
  [key: string]: string | number;
}

interface LanchoneteCompleta {
  Nome: string;
  local: string;
  linkMapa?: string;
  itens: {
    nomeItem: string;
    valor: string | number;
  }[];
}