import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  setItem<T>(name: string, value: T) {
    if (localStorage) {
      localStorage.setItem(name, `${value}`);
    }
  }

  getItem(name: string): string {
    if (localStorage) {
      return localStorage.getItem(name);
    }
  }
}
