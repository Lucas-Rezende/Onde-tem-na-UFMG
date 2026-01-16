import dataprecos from '../../../assets/dados/Tabela_com_precos.json';
import datalanchonetes from '../../../assets/datalanchonetes.json';

import { CompararPrecosService } from './../../services/CompararPrecos/comparar-precos.service';
import { Component, OnInit } from '@angular/core';
declare var bootstrap: any;

@Component({
    selector: 'app-comparar-precos',
    imports: [],
    templateUrl: './comparar-precos.component.html',
    styleUrls: ['./comparar-precos.component.css'],
    standalone: true,
})
export class CompararPrecosComponent implements OnInit {
    itens: any[] = dataprecos;
    lanchonetes: any[] = datalanchonetes.lanchonetes;
    modoVisualizacao: 'alfabetica' | 'precoMedio' = 'alfabetica';
    private modalInstance: any;

    lanchoneteMenorMedia: string | null = null;
    itemSelecionado: string = '';
    lanchoneteComMenorPreco: string | null = null;
    menorPreco: number | null = null;

    constructor(private compararPrecosService: CompararPrecosService) { }

    ngOnInit() {
        this.ordenarItens();
        this.calcularLanchoneteComMenorMedia();
    }

    toggleModoVisualizacao() {
        this.modoVisualizacao =
            this.modoVisualizacao === 'alfabetica' ? 'precoMedio' : 'alfabetica';
        this.ordenarItens();
    }

    ordenarItens() {
        this.itens = this.compararPrecosService.ordenarItens(this.itens, this.modoVisualizacao, this.lanchonetes);
    }

    calcularPrecoMedio(item: any): number {
        return this.compararPrecosService.calcularPrecoMedio(item, this.lanchonetes);
    }

    getPreco(item: any, nomeLanchonete: string): string | null {
        return this.compararPrecosService.getPreco(item, nomeLanchonete);
    }

    destacarItem(event: Event) {
        const target = event.target as HTMLSelectElement;
        const selectedValue = target.value;

        this.itemSelecionado = selectedValue;
        const item = this.itens.find((i) => i.Item === selectedValue);

        if (!item) {
            this.lanchoneteComMenorPreco = null;
            this.menorPreco = null;
            return;
        }

        const result = this.compararPrecosService.calcularLanchoneteComMenorPreco(item, this.lanchonetes);
        this.lanchoneteComMenorPreco = result.nome;
        this.menorPreco = result.preco;
    }

    isMenorPreco(item: any, lanchonete: string): boolean {
        return (
            item.Item === this.itemSelecionado &&
            lanchonete === this.lanchoneteComMenorPreco
        );
    }

    isLanchonete(lanchonete: string): boolean {
        return lanchonete === this.lanchoneteComMenorPreco;
    }

    calcularLanchoneteComMenorMedia() {
        this.lanchoneteMenorMedia = this.compararPrecosService.calcularLanchoneteComMenorMedia(this.itens, this.lanchonetes);
    }

    getItemId(item: any): string {
        return this.compararPrecosService.getItemId(item);
    }

    irParaItem() {
        if (!this.itemSelecionado || !this.lanchoneteComMenorPreco) return;

        const cellId = this.getItemId({ Item: this.itemSelecionado }) + '-' + this.lanchoneteComMenorPreco;
        const el = document.getElementById(cellId);

        if (el) {
            el.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center'
            });

            el.style.transition = 'background-color 0.3s';
            const originalBg = el.style.backgroundColor;
            el.style.backgroundColor = '#ffd43b';

            setTimeout(() => {
                el.style.backgroundColor = originalBg;
            }, 1500);
        }
    }

    aplicarSelecao(itemName: string) {
        if (!itemName) return;

        this.itemSelecionado = itemName;
        const item = this.itens.find((i) => i.Item === itemName);

        if (item) {
            const result = this.compararPrecosService.calcularLanchoneteComMenorPreco(item, this.lanchonetes);
            this.lanchoneteComMenorPreco = result.nome;
            this.menorPreco = result.preco;
        } else {
            this.lanchoneteComMenorPreco = null;
            this.menorPreco = null;
        }
    }

    openModal() {
        const modalElement = document.getElementById('itemPickerModal');
        if (modalElement) {
            if (!this.modalInstance) {
                this.modalInstance = new bootstrap.Modal(modalElement);
            }
            this.modalInstance.show();
        }
    }

    selectByModal(itemName: string) {
        this.aplicarSelecao(itemName);
        if (this.modalInstance) {
            this.modalInstance.hide();
        }
    }
}
