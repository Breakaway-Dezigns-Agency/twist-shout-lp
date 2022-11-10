module.exports = {
 content: [
   './*.html'
 ],
 media: false,
 theme: {
   screens: {
     'xs': '450px',
     'sm': '640px',
     'md': '790px',
     'lg': '1024px',
     'xl': '1280px',
     '2xl': '1540px'
   },
   fontFamily: {
     'one': `'Montserrat'`,
     'two': `'Permanent Marker'`,
     'three': `'VTKS Animal 2'`
   },
   colors: {
     blue: {
       DEFAULT: '#1B70BB',
       navy: '#145593',
       aqua: '#CFEBFF',
       sky: '#00CFFF',
       light: '#A4D2F5',
     },
     gray: '#EDEDED',
     white: {
       DEFAULT: '#F7F8F6',
       dark: '#F5F5F5'
     },
     black: {
       light: '#2C3E50',
       DEFAULT: '#191919'
     },
     transparent: 'transparent',
   },
   extend: {
     fontSize:{
       'md': '1.25rem',
       '404': '15rem'
     },
     zIndex:{
       '1': '1',
     },
     maxWidth: {
       'xxs': '17rem',
       '8xl': '90rem'
     },
     boxShadow: {
       'full': '12px 12px 12px 0px rgb(0 0 0 / 0.35);'
     }
   },
 },
 plugins: [],
}