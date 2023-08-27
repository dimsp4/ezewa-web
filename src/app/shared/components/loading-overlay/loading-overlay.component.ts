import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loading-overlay',
  template: `
    <div class="loading-overlay" *ngIf="isLoading">
      <mat-progress-spinner
        mode="indeterminate"
        diameter="40"
        color="primary"
      ></mat-progress-spinner>
    </div>
  `,
  styles: [
    `
      .loading-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 115%;
        height: 100%;
        background: rgba(0, 0, 0, 0); /* Transparan */
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
      }

      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `,
  ],
})
export class LoadingOverlayComponent {
  @Input() isLoading = false;
}
