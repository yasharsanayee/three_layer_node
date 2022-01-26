import {Rest} from '../rest/base/rest';
import {PageController} from '../controller/page.controller';

export const isIdInvalid = (id: number | string): boolean => isNaN(typeof id === 'number' ? id : parseInt(id));

export const GetPageRoutes = (pageController: PageController): Rest[] => {
    const pageRoutes: Rest[] = [];
    const methods: string[] = Reflect.getMetadataKeys(pageController);
    methods.forEach((method) => {
        const route: string = Reflect.getMetadata(method, pageController)['route'];
        const pageRest = new Rest('get', route, PageController, method);
        pageRoutes.push(pageRest);
    });
    return pageRoutes;
};