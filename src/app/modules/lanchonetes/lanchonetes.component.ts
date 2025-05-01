import { Component } from '@angular/core';
import { Router } from '@angular/router';

//import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-lanchonetes',
  imports: [],
  templateUrl: './lanchonetes.component.html',
  styleUrl: './lanchonetes.component.css',
  
})

export class LanchonetesComponent {
  searchTerm : string = '';

  constructor (private router : Router){}
  search(e: Event) : void{
   
  const target = e.target as HTMLInputElement;
  const value = target.value;
    
  }

  voltar() : void{
    this.router.navigate([''])
  }
}
