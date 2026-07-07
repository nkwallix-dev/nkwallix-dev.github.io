import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})

export class App {
  searchOpen = false;
  toggleSearch() {
    this.searchOpen = !this.searchOpen;
  }
  protected readonly title = signal('NKWallix Storyhub');
}
