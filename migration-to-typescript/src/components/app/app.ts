import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { AppControllerClass } from '../controller/controller';
import { AppViewClass } from '../view/appView';
import { ResponseObject } from '../../types/index';
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

        if(startDocument) startDocument.addEventListener('click', (e: Event) => this.controller.getNews(e, (data?:ResponseObject) => {
           if(data !== undefined){
            return this.view.drawNews(data)
           }
           
        })) ;
        this.controller.getSources((data?:ResponseObject) => {
            if(data !== undefined){
                return this.view.drawSources(data)
            }
        });
    }
}

export default App;
