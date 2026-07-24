  // Importação necessária para usar *ngFor e *ngIf
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import datalanchonetes from '../../../assets/datalanchonetes.json';
import { NOMEM } from 'dns';

@Component({
  selector: 'app-lanchonetes',
  templateUrl: './lanchonetes.component.html',
  styleUrls: ['./lanchonetes.component.css'],
  standalone: true,
  imports: [RouterModule]
})
export class LanchonetesComponent {
  searchTerm: string = '';

  lanchonetes: any[] = datalanchonetes.lanchonetes;
  somenteVR: boolean = false;

  constructor(private router: Router) {}

  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.searchTerm = target.value;
  }
  
   atualizarFiltroVR(e: Event): void {
    const input = e.target as HTMLInputElement;
    this.somenteVR = input.checked;
  }

  get lanchonetesFiltradas() {
    const termo = this.searchTerm.trim().toLowerCase();
    const vr = this.somenteVR;

    if(vr){
      if (!termo){
      return this.lanchonetes.filter(l=> l.AceitaVr === "Sim");
      }
      return this.lanchonetes.filter(l=> l.AceitaVr === "Sim" && l.Nome.toLowerCase().includes(termo))
    }
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
