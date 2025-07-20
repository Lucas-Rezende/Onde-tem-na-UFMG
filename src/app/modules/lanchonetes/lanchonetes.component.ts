  // Importação necessária para usar *ngFor e *ngIf
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import datalanchonetes from '../../../assets/datalanchonetes.json';  // Supondo que os dados das lanchonetes estão aqui

@Component({
  selector: 'app-lanchonetes',
  templateUrl: './lanchonetes.component.html',
  styleUrls: ['./lanchonetes.component.css'],
  standalone: true, // Habilitar o uso de componentes independentes
  imports: [RouterModule] // Para usar ngFor e ngIf
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

    return this.lanchonetes.filter(l => l.Nome.toLowerCase().includes(termo));
  }

  trackById(index: number, lanchonete: any): number {
    return lanchonete.Nome;
  }

  voltar(): void {
    this.router.navigate(['']);
  }
}
