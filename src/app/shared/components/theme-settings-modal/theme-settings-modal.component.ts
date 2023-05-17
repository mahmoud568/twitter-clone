import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-theme-settings-modal',
  templateUrl: './theme-settings-modal.component.html',
  styleUrls: ['./theme-settings-modal.component.scss']
})
export class ThemeSettingsModalComponent {
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();

}
