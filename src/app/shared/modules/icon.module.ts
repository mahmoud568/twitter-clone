import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@NgModule({
  imports: [CommonModule],
})
export class IconModule {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}

  registerIcons(): void {
    this.matIconRegistry.addSvgIcon('verified_account', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/verified_account.svg'));
    this.matIconRegistry.addSvgIcon('logo', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/logo.svg'));
    this.matIconRegistry.addSvgIcon('check_sign', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/check_sign.svg'));
    this.matIconRegistry.addSvgIcon('backspace', this.domSanitizer.bypassSecurityTrustResourceUrl('assets/icons/backspace.svg'));
    // Add more icon registrations here
  }
}