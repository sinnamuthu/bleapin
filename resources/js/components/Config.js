import Cookies from 'universal-cookie';
const cookies = new Cookies();
if (cookies.get('siteLang') == undefined || location.pathname.split('/')[1] != 'ta') 
	cookies.set('siteLang', 'en', { path: '/' });
else if(location.pathname.split('/')[1] == 'ta')
	cookies.set('siteLang', 'ta', { path: '/' });
const CONFIG = {
  	APP_URL: 'https://www.bleap.in',
  	ROUTE_URL: '',
  	GOOGLE_RECAPTCHA_KEY: '6LekUMEUAAAAAPEOnW07rrTmO7HIu5R-vwvq3CW_',
  	GOOGLE_RECAPTCHA_KEY_INVISIBLE: '6Lc1ecEUAAAAACnsWmLFHbjIuKl4QZURzXpSvKJE'
}
if (cookies.get('siteLang') == 'ta') {
	CONFIG.ROUTE_URL = '/ta';
}

// setTimeout(() => {
	CONFIG.SITE_LANG = cookies.get('siteLang');
// });


export default CONFIG;