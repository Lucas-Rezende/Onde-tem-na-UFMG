import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http'; 
import { FloatingNavComponent } from '../../shared/components/floating-nav/floating-nav.component';
import { MinimalistNavbarComponent } from '../../shared/components/minimalist-navbar/minimalist-navbar.component';

@Component({
    selector: 'app-contato',
    imports: [
        CommonModule,
        ReactiveFormsModule,
        HttpClientModule,
        FloatingNavComponent,
        MinimalistNavbarComponent
    ],
    templateUrl: './contato.component.html',
    styleUrl: './contato.component.css'
})
export class ContatoComponent {
    private fb = inject(FormBuilder);
    private http = inject(HttpClient);

    formStatus: 'idle' | 'submitting' | 'success' | 'error' = 'idle';

    contatoForm: FormGroup = this.fb.group({
        nome: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        mensagem: ['', [Validators.required]]
    });

    onSubmit() {
        if (this.contatoForm.invalid) {
            this.contatoForm.markAllAsTouched();
            return;
        }

        this.formStatus = 'submitting';
        this.contatoForm.disable();

        const formspreeUrl = 'https://formspree.io/f/myknprra';

		this.http.post(formspreeUrl, this.contatoForm.value, {
            headers: { 'Accept': 'application/json' }
        }).subscribe({
            next: () => {
                this.formStatus = 'success';
                this.contatoForm.reset();
                this.contatoForm.enable();
            },
            error: () => {
                this.formStatus = 'error';
                this.contatoForm.enable();
            }
        });
    }

    resetForm() {
        this.formStatus = 'idle';
    }
}