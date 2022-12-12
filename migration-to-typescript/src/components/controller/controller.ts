import AppLoader from './appLoader';
import { paramGetResp } from './loader';
interface AppControllerClass {
    getSources(callback:()=>void):void
    getNews(e: Event, callback:()=> void):void;
}

class AppController extends AppLoader implements AppControllerClass{
    getSources(callback:()=>void) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: Event, callback:()=>void):void {
        let target= e.target as Element
        const newsContainer = e.currentTarget 
        
            while (target !== newsContainer) {
                if ((target as HTMLElement).classList.contains('source__item')) {
                    const sourceId = (target as HTMLElement).getAttribute('data-source-id');
                    if ((newsContainer as HTMLElement).getAttribute('data-source') !== sourceId) {
                        if(sourceId) (newsContainer as HTMLElement).setAttribute('data-source', sourceId);
                        super.getResp(
                            {
                                endpoint: 'everything',
                                options: {
                                    sources: sourceId,
                                },
                            },
                            callback
                        );
                    }
                    return;
                }
                 target = target.parentNode as Element
            }
        
    }
}

export default AppController;
