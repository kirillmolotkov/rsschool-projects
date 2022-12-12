import './sources.css';
import { ResponseObject } from '../../../types/index';

class Sources {
    draw(data:ResponseObject['sources']) {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector('#sourceItemTemp') as HTMLTemplateElement;

        data.forEach((item) => {
            const sourceClone = sourceItemTemp.content.cloneNode(true) as Element;

            const sourceCloneItemName = sourceClone.querySelector('.source__item-name')
            if(sourceCloneItemName) sourceCloneItemName.textContent = item.name;

            const sourceCloneItem = sourceClone.querySelector('.source__item')
            if(sourceCloneItem) sourceCloneItem.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        const addFragment = document.querySelector('.sources')
        if(addFragment) addFragment.append(fragment);
    }
}

export default Sources;
