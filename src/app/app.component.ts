import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  public appPages = [
    { title: 'Productos', url: 'productos', icon: 'mail' },
    { title: 'Login', url: 'in-sesion', icon: 'paper-plane' },
    { title: 'Regis', url: 'registro', icon: 'heart' },
  ];
  public labels = ['Family', 'Friends'];
  constructor() {}
}
