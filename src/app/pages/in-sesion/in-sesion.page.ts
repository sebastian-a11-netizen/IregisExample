import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-in-sesion',
  templateUrl: './in-sesion.page.html',
  styleUrls: ['./in-sesion.page.scss'],
  standalone: false
})
export class InSesionPage implements OnInit {

  email = '';
  password = '';

  constructor(private readonly authService: AuthService, private readonly toastCtrl: ToastController, private readonly router: Router) { }

  ngOnInit() {
  }

  async showToast(message: string, color: string = 'success') {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2000,
      color,
    });
    await toast.present();
  }

  async login() {
    try {
      await this.authService.loginUser(this.email, this.password);
      this.showToast('Inicio de sesión exitoso');
    } catch (error) {
      this.showToast('Validar datos ingresados', 'danger');
    }
  }

  register() {
    this.router.navigate(['/registro']);
  }

}
