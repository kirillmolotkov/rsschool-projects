import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { AppControllerClass } from '../controller/controller';
import { AppViewClass } from '../view/appView';
interface AppClass {
    controller: AppControllerClass
    view: AppViewClass;
    start():void
}

class App implements AppClass{
    controller: AppControllerClass;
    view: AppViewClass;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        const startDocument = document.querySelector('.sources') as HTMLElement

        if(startDocument) startDocument.addEventListener('click', (e: Event) => this.controller.getNews(e, (data) => this.view.drawNews(data))) ;
        this.controller.getSources((data) => this.view.drawSources(data));
    }
}

export default App;
