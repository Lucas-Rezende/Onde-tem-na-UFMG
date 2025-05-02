import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
//import { LanchoneteDataService } from '../../services/lanchonete-data.service';
//import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lanchonetes',
  imports: [ CommonModule ],
  templateUrl: './lanchonetes.component.html',
  styleUrl: './lanchonetes.component.css',
})

export class LanchonetesComponent {
  searchTerm: string = '';


  lanchonetes = [
    { nome: 'Lanchonete ICEX', local: 'Bloco A', precoMedio: 'R$ 15' },
    { nome: 'Cantina Central', local: 'Centro', precoMedio: 'R$ 12' },
    { nome: 'Lanches do João', local: 'Bloco B', precoMedio: 'R$ 10' },
    // outras fictícias...
  ];

  constructor(private router: Router) {}

  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.searchTerm = target.value;
  }

  get lanchonetesFiltradas() {
    const termo = this.searchTerm.trim().toLowerCase();
    if (!termo) return [];

    return this.lanchonetes.filter(l =>
      l.nome.toLowerCase().includes(termo)
    );
  }

  voltar(): void {
    this.router.navigate(['']);
  }
}
