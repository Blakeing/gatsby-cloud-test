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
    },
    container: {
      center: true,
      padding: '1.25rem',
    },
    fontFamily: {
      sans: ['Inter var', 'system-ui', 'sans-serif'],
    },
  },
  variants: {
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
    display: ['responsive', 'hover', 'focus', 'last'],
  },
}
