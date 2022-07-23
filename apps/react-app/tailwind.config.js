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
      borderWidth: {
        1: '1px',
      },
      colors: {
        'iag-border': '#F2F3F4',
        'header-text': '#6466E9',
        body: '#F9FAFB',
        footer: 'rgba(78, 70, 222, 0.1)',
      },
      padding: {
        '32px': '32px',
        body: '64px 16px',
      },
      gap: {
        '12px': '12px',
      },
      borderRadius: {
        header: '4px 4px 0px 0px',
      },
      fontSize: {
        '28px': '28px',
        '14px': '14px',
      },
      height: {
        '416px': '416px',
      },
      width: {
        '900px': '900px',
      },
      lineHeight: {
        '38px': '38px',
      },
    },
  },
  plugins: [],
};
