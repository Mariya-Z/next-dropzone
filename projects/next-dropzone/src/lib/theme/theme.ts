export interface Theme {
  dragenter: {
    'border': string,
    'border-radius': string,
    'border-color': string,
  };
  dragover: {
    'border': string,
    'border-radius': string,
    'border-color': string,
    'background': string,
  };
}

export const defaultTheme: Theme = {
  dragenter: {
    'border': '2px solid',
    'border-radius': '4px',
    'border-color': '#0460a9',
  },
  dragover: {
    'border': '2px solid',
    'border-radius': '4px',
    'border-color': '#0460a9',
    'background': 'rgba(82, 145, 221, 0.3)',
  },
};
