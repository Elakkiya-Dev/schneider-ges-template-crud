import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ToastModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  userName!: string;
  isDark = false;

  constructor(private authService: AuthService) {
    this.userName = this.authService.currentUser?.name ?? 'Guest';
  }

  toggleTheme(): void {
    this.isDark = !this.isDark;
  }
}
