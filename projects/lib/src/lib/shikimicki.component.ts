import {Component, inject, signal} from '@angular/core';
import { codeToHtml } from 'shiki'
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
  selector: 'shikimicki',
  standalone: true,
  imports: [],
  template: `
    <div [innerHTML]="formatedCode()">
    </div>
  `,
  styles: ``
})
export class ShikimickiComponent {
  #sanitizer = inject(DomSanitizer);

  formatedCode = signal<SafeHtml | undefined>(undefined);

  constructor() {
    this.formatIt();
  }



  async formatIt() {
    const code = `@Component({
    standalone: true,
    selector: '<h1>Test</h1>',
    })
    export class TestComponent {}`;
    const html = await codeToHtml(code, {
      lang: 'angular-ts',
      theme: 'github-light'
    });
    const sanitizedHTML = this.#sanitizer.bypassSecurityTrustHtml(html);
    this.formatedCode.set(sanitizedHTML);
  }
}
