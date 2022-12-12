import News from './news/news';
import Sources from './sources/sources';
import { NewsClass } from './news/news';
import { SourcesClass } from './sources/sources';
import { ResponseObject } from '../../types/index';

export class AppView {
    news: NewsClass;
    sources: SourcesClass
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: ResponseObject) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data:ResponseObject) {
        const values= data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
