import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LanchoneteDataService {
  constructor(private http: HttpClient) {}

  getPrecos() {
    return this.http.get<any[]>('/assets/dados/Tabela_com_precos.json');
  }
  ordenarPorPrecoItem(itemDesejado: string, dados: any[]): any[] {
    const resultado = [];
    
    const item = dados.find(d => d.item === itemDesejado);
    if (!item) return [];
  
    const precosPorLanchonete = Object.keys(item)
      .filter(key => key !== 'item')
      .map(lanchonete => ({
        lanchonete,
        preco: item[lanchonete]
      }));
  
    return precosPorLanchonete.sort((a, b) => a.preco - b.preco);
  }
}