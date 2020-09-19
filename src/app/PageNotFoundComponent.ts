import { Component } from '@angular/core';

@Component({
  template: `
    <div>
      <h1>404 Not Found</h1>
    </div>
  `,
  styles: [
    `
      h1 {
        font-weight: bold;
        font-size: 3em;
        text-align: center;
      }
    `
  ]
})
export class PageNotFoundComponent {}