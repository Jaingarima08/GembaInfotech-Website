module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#D3D3D3', // Your custom color code
        'custom-gray-child': '#ebebe0',
        'white-2':'#c4c2bb',
        'gray-check': '#DBDEE7',
        'cardColor':'#003E65',
    },
      fontFamily: {
        custom: [
          'Binario', 
          'HelveticaNeue-Light', 
          'Helvetica Neue Light', 
          'Helvetica Neue', 
          'Helvetica', 
          'Arial', 
          'Lucida Grande', 
          'sans-serif'
        ],
      },
      keyframes: {
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(100%)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        slideInLeft: 'slideInLeft 2s ease-in-out forwards',
        slideInRight: 'slideInRight 2s ease-in-out forwards',
        slideUp: 'slideUp 0.3s ease-in-out forwards',
      },
    },
  },
  plugins: [],
}
