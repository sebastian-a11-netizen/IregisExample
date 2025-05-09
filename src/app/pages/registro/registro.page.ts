import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
  standalone: false
})
export class RegistroPage implements OnInit {

  name = '';
  email = '';
  password = '';
  confirmPassword = '';

  constructor( private readonly authService: AuthService,
    private readonly router: Router,
    private readonly toastCtrl: ToastController) { }

  ngOnInit() {
  }

  async register() {
    if (this.password !== this.confirmPassword) {
      this.showToast("Las contraseñas no coinciden", 'danger');
      return;
    }

    try {
      await this.authService.registerUser(this.email, this.password, this.name);
      this.showToast('Account created successfully');
      this.router.navigate(['/in-sesion']);
    } catch (error) {
      const errorMessage = (error instanceof Error) ? error.message : 'An unexpected error occurred';
      this.showToast(errorMessage, 'danger');
      console.log(errorMessage);
    }
  }

  goToLogin() {
    this.router.navigate(['/in-sesion']);
  }

  async showToast(message: string, color: string = 'success') {
    const toast = await this.toastCtrl.create({
      message,
      duration: 2500,
      color,
    });
    await toast.present();
  }

}
