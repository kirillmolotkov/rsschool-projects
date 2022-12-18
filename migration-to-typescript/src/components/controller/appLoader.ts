import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi-redirect-production.up.railway.app/', {
            apiKey: 'd1891ce7ad5f42f9a39ff887babdc0a8', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
