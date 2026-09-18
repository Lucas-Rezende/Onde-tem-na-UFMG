import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import datalanchonetes from '../../../assets/datalanchonetes.json';

@Component({
  selector: 'app-lanchonetes',
  templateUrl: './lanchonetes.component.html',
  styleUrls: ['./lanchonetes.component.css'],
  standalone: true,
  imports: [RouterModule]
})
export class LanchonetesComponent implements OnInit {
  searchTerm: string = '';

  lanchonetes: any[] = datalanchonetes.lanchonetes;
  lanchonetesAtivas: any[] = [];
  somenteVR: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.lanchonetesAtivas = this.lanchonetes.filter(
      lanchonete => lanchonete.Ativo == true);
      }

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
      return this.lanchonetesAtivas.filter(l=> l.AceitaVr === "Sim");
      }
      return this.lanchonetesAtivas.filter(l=> l.AceitaVr === "Sim" && l.Nome.toLowerCase().includes(termo))
    }
    if (!termo) return this.lanchonetesAtivas;
    return this.lanchonetesAtivas.filter(l => l.Nome.toLowerCase().includes(termo));
  }

  get totalLanchonetes(): number {

    return this.lanchonetesFiltradas.length
  }

  trackById(index: number, lanchonete: any): number {
    return lanchonete.Nome;
  }

  voltar(): void {
    this.router.navigate(['']);
  }
}
