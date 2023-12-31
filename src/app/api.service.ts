import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Theme } from './shared/interfaces/theme';

const apiURL = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  loadThemes() {
    return this.httpClient.get<Theme[]>(`${apiURL}/themes`);
  }

  loadTheme(id: Number) {
    return this.httpClient.get<Theme>(`${apiURL}/themes/${id}`);
  }
}
