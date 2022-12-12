import './news.css';
import { ResponseObject } from '../../../types/index';
export interface NewsClass {
    draw(data: ResponseObject['sources']): void;
}
class News {
    draw(data: ResponseObject['sources']) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as Element;
            const newsItem = newsClone.querySelector('.news__item');

            if (idx % 2) if (newsItem) newsItem.classList.add('alt');

            const newsPhoto = newsClone.querySelector('.news__meta-photo') as HTMLElement;
            if (newsPhoto)
                newsPhoto.style.backgroundImage = `url(${item.urlToImage || './assets/news_placeholder.png'})`;

            const newsAuthor = newsClone.querySelector('.news__meta-author');
            if (newsAuthor) newsAuthor.textContent = item.author || item.source.name;

            const newsMetaDate = newsClone.querySelector('.news__meta-date');
            if (newsMetaDate) newsMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

            const newsTitle = newsClone.querySelector('.news__description-title');
            if (newsTitle) newsTitle.textContent = item.title;

            const newsSource = newsClone.querySelector('.news__description-source');
            if (newsSource) newsSource.textContent = item.source.name;

            const newsDescription = newsClone.querySelector('.news__description-content');
            if (newsDescription) newsDescription.textContent = item.description;

            const newsLink = newsClone.querySelector('.news__read-more a');
            if (newsLink) newsLink.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const clearNewsItem = document.querySelector('.news');
        if (clearNewsItem) clearNewsItem.innerHTML = '';

        const addNewsItem = document.querySelector('.news');
        if (addNewsItem) addNewsItem.appendChild(fragment);
    }
}

export default News;
