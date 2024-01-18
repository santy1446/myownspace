import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'mos-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {

  constructor(
    private _router: Router,
  ) {}

  goHome(): void {
    this._router.navigate(['home']);
  }
}
