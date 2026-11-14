import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
})
export class App {
  name = 'Fatima';
  formation = 'developpeuse web';
  schcool ='emsi marrakech';
  age = 23;
  count = signal(0);
  showDetails = signal(false);
  sayHello() {
    alert('Bienvenue dans mon application Angular !');
  }
}

