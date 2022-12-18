import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: 'd1891ce7ad5f42f9a39ff887babdc0a8', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
