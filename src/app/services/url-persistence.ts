import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class UrlPersistence {
  private readonly router = inject(Router);

  updateQueryParams(params: Record<string, string | number | null>): void {
    const queryParams: Record<string, string | null> = {};

    for (const [key, value] of Object.entries(params)) {
      queryParams[key] = value !== null && value !== '' ? String(value) : null;
    }

    this.router.navigate([], {
      queryParams,
      queryParamsHandling: 'merge',
      replaceUrl: true,
    });
  }

  getQueryParam(key: string): string | null {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(key);
  }

  getQueryParamAsNumber(key: string): number | null {
    const value = this.getQueryParam(key);
    if (value === null) return null;
    const num = Number(value);
    return isNaN(num) ? null : num;
  }
}
