import News from './news/news';
import Sources from './sources/sources';
import { NewsClass } from './news/news';
import { SourcesClass } from './sources/sources';
import { ResponseObject } from '../../types/index';

export interface AppViewClass {
    news: NewsClass;
    sources: SourcesClass;
    drawNews(data: ResponseObject): ResponseObject
    drawSources(data: ResponseObject): ResponseObject
}

export class AppView implements AppViewClass{
    news: NewsClass;
    sources: SourcesClass
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: ResponseObject):ResponseObject {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
        return data
    }

    drawSources(data:ResponseObject):ResponseObject {
        const values= data?.sources ? data?.sources : [];
        this.sources.draw(values);
        return data
    }
}

export default AppView;
