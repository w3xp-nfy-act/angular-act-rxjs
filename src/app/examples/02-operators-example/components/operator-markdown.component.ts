import { Component } from '@angular/core';

@Component({
    selector: 'app-operator-markdown',
    template: `
    <markdown [src]="'./assets/md/operators.md'"></markdown>
    `
})

export class OperatorMarkdownComponent {}