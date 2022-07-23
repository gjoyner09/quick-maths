const { createGlobPatternsForDependencies } = require('@nrwl/react/tailwind');
const { join } = require('path');

module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      padding: {
        'iag-48': '48px',
        'iag-32': '32px',
        'iag-12': '12px',
        '12-18': '12px 18px',
      },
      borderWidth: {
        1: '1px',
        3: '3px',
      },
      borderRadius: {
        iag: '4px',
        'iag-2': '4px 4px 0px 0px',
        '6px': '6px',
      },
      colors: {
        'iag-blue': '#4E45DD',
        'iag-white': '#F9FAFB',
        'iag-bord': '#4D4D4D',
        'iag-bord-2': '#F2F3F4',
        'iag-bord-3': '#D1D5DA',
        'iag-background': 'rgba(78, 69, 221, 0.5)',
        'iag-label': '#394150',
        'iag-error-input': '#762522',
        'iag-error-border': '#F0A9A6',
        'iag-error-text': '#CB3A31',
      },
      gap: {
        '8px': '8px',
        '32px': '32px',
      },
      fontSize: {
        '16px': '16px',
        '14px': '14px',
        '28px': '28px',
      },
      width: {
        '257px': '257px',
        '900px': '900px',
      },
      height: {
        '160px': '160px',
      },
    },
  },
  plugins: [],
};
