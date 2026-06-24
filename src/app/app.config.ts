import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import { MessageService } from 'primeng/api';
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';
import { routes } from './app.routes';

const SchneiderPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#f0fdf3',
      100: '#dcfce4',
      200: '#bbf7ca',
      300: '#86eda3',
      400: '#4ade73',
      500: '#3dcd58',
      600: '#22a83f',
      700: '#1d8534',
      800: '#1c692e',
      900: '#195628',
      950: '#082f14',
    },
  },
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    // Required by PrimeNG components such as Dialog and Toast.
    // Although deprecated by Angular, PrimeNG still relies on it currently.
    provideAnimationsAsync(),
    providePrimeNG({
      ripple: true,
      theme: {
        preset: SchneiderPreset,
        options: {
          darkModeSelector: '.app-dark',
          cssLayer: {
            name: 'primeng',
            order: 'theme, base, primeng',
          },
        },
      },
    }),
    MessageService,
  ],
};
