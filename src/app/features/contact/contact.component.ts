import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { TranslationService } from '../../core/services/translation.service';
import { SeoService } from '../../core/services/seo.service';

interface ValidationError {
  field: string;
  error: string;
}

interface ContactResponse {
  success: boolean;
  message: string;
  errors?: ValidationError[];
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  translationService = inject(TranslationService);
  private seoService = inject(SeoService);
  private http = inject(HttpClient);

  isSubmitting = signal(false);
  submitted = signal(false);
  errorMessage = signal<string | null>(null);
  fieldErrors = signal<Record<string, string>>({});

  // Backend API URL - adjust for production
  private apiUrl = 'http://localhost:3000/api/contact';

  formData = {
    name: '',
    email: '',
    company: '',
    need: '',
    message: ''
  };

  ngOnInit(): void {
    this.seoService.updateSeo({
      title: 'Contact',
      description: 'Démarrons votre projet. Décrivez votre besoin et voyons comment structurer vos opérations avec un système adapté.',
      keywords: 'contact Aura Dynamic, devis projet digital, consultation gratuite, structurer opérations'
    });
  }

  async handleSubmit(): Promise<void> {
    if (this.isSubmitting()) return;

    // Reset states
    this.errorMessage.set(null);
    this.fieldErrors.set({});
    this.isSubmitting.set(true);

    this.http.post<ContactResponse>(this.apiUrl, this.formData).subscribe({
      next: (response) => {
        this.isSubmitting.set(false);
        if (response.success) {
          this.submitted.set(true);
          this.formData = { name: '', email: '', company: '', need: '', message: '' };

          // Hide success message after 5 seconds
          setTimeout(() => {
            this.submitted.set(false);
          }, 5000);
        } else {
          this.errorMessage.set(this.translationService.t(response.message || 'validation.failed'));
        }
      },
      error: (err: HttpErrorResponse) => {
        this.isSubmitting.set(false);

        if (err.status === 400 && err.error && err.error.errors) {
          const errorsObj: Record<string, string> = {};
          err.error.errors.forEach((e: ValidationError) => {
            errorsObj[e.field] = this.translationService.t(e.error);
          });
          this.fieldErrors.set(errorsObj);
          this.errorMessage.set(this.translationService.t('validation.failed'));
        } else if (err.error && err.error.message) {
          this.errorMessage.set(this.translationService.t(err.error.message));
        } else if (err.status === 0) {
          this.errorMessage.set(this.translationService.t('validation.connection_error'));
        } else {
          this.errorMessage.set(this.translationService.t('validation.server_error'));
        }
      }
    });
  }
}
