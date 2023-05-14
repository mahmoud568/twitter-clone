import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
private previousScrollPosition = 0;
  private isPageReloaded = false;
  isScrolled = false;
  constructor() {
    // Check if the page was reloaded while the user was scrolling
    const wasPageReloaded = localStorage.getItem('wasPageReloaded');
    if (wasPageReloaded === 'true') {
      this.isPageReloaded = true;
      localStorage.removeItem('wasPageReloaded');
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    const currentScrollPosition = window.pageYOffset;
    // Don't trigger the functions if the page was just reloaded
    if (!this.isPageReloaded) {
      if (
        currentScrollPosition > 0 &&
        currentScrollPosition <
          document.documentElement.scrollHeight - window.innerHeight
      ) {
        // Not at the top or bottom of the page
        if (currentScrollPosition > this.previousScrollPosition) {
          // Scrolling down
          if (!this.isScrolled) {
            this.isScrolled = true;
          }
        } else {
          // Scrolling up
          if (this.isScrolled) {
            this.isScrolled = false;
          }
        }
      }
    }
    this.previousScrollPosition = currentScrollPosition;
    this.isPageReloaded = false;
  }

  @HostListener('window:beforeunload')
  onBeforeUnload() {
    // Set a flag indicating that the page was reloaded
    localStorage.setItem('wasPageReloaded', 'true');
  }
}
