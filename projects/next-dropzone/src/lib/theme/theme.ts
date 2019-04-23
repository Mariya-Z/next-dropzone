import {InjectionToken} from '@angular/core';

export const THEMES = new InjectionToken('THEMES');

export interface Theme {
  name: string;
  properties: any;
}

export const dragenter: Theme = {
  name: 'dragenter',
  properties: {
    'border': '2px solid',
    'border-radius': '4px',
    'border-color': '#0460a9',
  },
};

export const dragover: Theme = {
  name: 'dragover',
  properties: {
    'border': '2px solid',
    'border-radius': '4px',
    'border-color': '#0460a9',
    'background': 'rgba(82, 145, 221, 0.3)',
  },
};

export const themeOptions: Theme[] = [dragenter, dragover];
