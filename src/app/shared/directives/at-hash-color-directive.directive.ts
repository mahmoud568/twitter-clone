import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAtHashColor]',
})
export class AtHashColorDirectiveDirective {
  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const text = this.el.nativeElement.innerText;
    const coloredText = this.highlightText(text);
    this.el.nativeElement.innerHTML = coloredText;
  }

  private highlightText(text: string): string {
    const regex = /[@#]\w+/g; // Matches "@" or "#" followed by one or more non-space characters
    return text.replace(
      regex,
      (match) => `<span style="color: #16a3fa">${match}</span>`
    );
  }
}
