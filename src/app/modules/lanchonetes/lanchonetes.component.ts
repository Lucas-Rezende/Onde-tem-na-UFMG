import { Component } from '@angular/core';


@Component({
  selector: 'app-lanchonetes',
  imports: [],
  templateUrl: './lanchonetes.component.html',
  styleUrl: './lanchonetes.component.css'
})

export class LanchonetesComponent {
  searchTerm : string = '';
  search(e: Event) : void{
   
  const target = e.target as HTMLInputElement;
  const value = target.value;
    
  }
}
