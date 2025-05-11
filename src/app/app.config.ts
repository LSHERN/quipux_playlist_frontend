import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withEnabledBlockingInitialNavigation, withInMemoryScrolling } from '@angular/router';
import { HttpClient, provideHttpClient, withFetch, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MessageService } from 'primeng/api';
import { TranslateLoader, provideTranslateService} from "@ngx-translate/core";
import { TranslateHttpLoader} from '@ngx-translate/http-loader';
import { appRoutes } from './app.routes';
import { authInterceptor } from './core/interceptor/auth-interceptor';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { CustomPresets } from './core/layout/theme';

export function httpLoaderFactory(http: HttpClient) {
    console.log("cosa");
    return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
        provideRouter(appRoutes, withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }), withEnabledBlockingInitialNavigation()),
        provideHttpClient(withFetch(),withInterceptors([authInterceptor])),
        provideAnimationsAsync(),
        provideZoneChangeDetection({ eventCoalescing: true }),
            provideTranslateService({
              loader: {
                provide: TranslateLoader,
                useFactory: httpLoaderFactory,
                deps: [HttpClient],
              },
              defaultLanguage: 'es', // Set the default language
            }),
            providePrimeNG({
            theme: {
                preset: CustomPresets,
                options:{darkModeSelector: false || 'none'}
            }
            }),
        MessageService
    ]
};
