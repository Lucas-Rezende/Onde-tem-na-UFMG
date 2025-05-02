import datalanchonetes from '../../../assets/datalanchonetes.json';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-lanchonetes',
  imports: [CommonModule],
  templateUrl: './lanchonetes.component.html',
  styleUrls: ['./lanchonetes.component.css'],
})
export class LanchonetesComponent {
  searchTerm: string = '';

  lanchonetes: any[] = datalanchonetes.lanchonetes;

  constructor(private router: Router) {}

  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.searchTerm = target.value;
  }

  get lanchonetesFiltradas() {
    const termo = this.searchTerm.trim().toLowerCase();
    if (!termo) return this.lanchonetes;

    return this.lanchonetes.filter(l =>
      l.Nome.toLowerCase().includes(termo)
    );
  }

  trackById(index: number, lanchonete: any): number {
    return lanchonete.Nome;
  }

  voltar(): void {
    this.router.navigate(['']);
  }
}
