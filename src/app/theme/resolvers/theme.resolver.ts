import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { Theme } from 'src/app/shared/interfaces/theme';

@Injectable({
  providedIn: 'root',
})
export class ThemeResolver implements Resolve<Theme | null> {
  constructor(private apiService: ApiService, private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Theme | null | Observable<Theme> | Promise<Theme> {
    const themeId = route.params['id'];
    if (!themeId) {
      this.router.navigate(['/theme/detail']);
      return null;
    }
    return this.apiService.loadTheme(themeId);
  }
}
