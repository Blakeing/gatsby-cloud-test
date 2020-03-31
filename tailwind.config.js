module.exports = {
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        auto: 'repeat(auto-fit, minmax(200px, 1fr))',
      },
      gap: {
        '5-vmin': '5vmin',
      },
      colors: {
        orange: '#EC5226',
        marketing: 'rgb(58,175,210)',
        brand: 'rgb(93,37,100)',
        web: 'rgb(181,47,47)',
        print: 'rgb(67,135,75)',
        steel: 'rgba(0, 0, 0, 0.08)',
        'dark-steel': 'rgba(167, 167, 167, 0.75)',
        edge: 'rgb(7, 81, 67)',
        hci: 'rgb(35, 146, 199)',
        gkh: 'rgb(31, 44, 70)',
        holland: 'rgb(31, 44, 70)',
        hookie: 'rgb(28, 69, 148)',
        martinez: 'rgb(50, 50, 50)',
        lead: 'rgb(51, 158, 164)',
        sbl: 'rgb(61, 113, 184)',
        trace: 'rgb(77, 149, 161)',
        creed: 'rgb(95, 129, 64)',
        flash: 'rgb(8, 75, 142)',
        frizzell: 'rgb(223, 110, 49)',
        griesenbeck: 'rgb(143, 37, 35)',
        cpc: 'rgb(32, 119, 180)',
      },
      maxWidth: {
        '1/2': '50%',
        '1/3': '33.33%',
      },
      height: {
        '300': '18.75rem',
        '184': '11.5rem',
      },
      backgroundPosition: {
        slider: 'left 5rem bottom -1rem',
        none: '',
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '25rem',
      },
    },
    container: {
      center: true,
      padding: '1.25rem',
    },
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
    display: ['responsive', 'hover', 'focus', 'last'],
  },
}
