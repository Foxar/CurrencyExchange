import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(@Inject(DOCUMENT) private document: Document){}
  title = 'kursy';

  themes = [
    {
      code: 'lara-dark-blue',
      name: 'Ciemny',
    },
    {
      code: 'lara-light-blue',
      name: 'Jasny',
    }
  ]

  currentTheme = 'lara-light-blue';

  themeSwitch(){
    this.currentTheme = this.currentTheme == 'lara-dark-blue'?'lara-light-blue':'lara-dark-blue';
    this.themeSet();
  }

  themeSet(){
    const themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = this.currentTheme + '.css';
  }
  }

}
