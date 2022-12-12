import { ResponseObject } from "../../types/index";
type paramMakeUrl = {
    [key:string]: object
}
export type paramGetResp = {
    endpoint: string
    options?: object
}
interface LoaderClass {
    baseLink: string;
    options: object
    getResp(param: paramGetResp, callback: () => void ):void
    errorHandler(res: Response): Response
    makeUrl(options: paramMakeUrl, endpoint: string): string
    load(method: string, endpoint: string, callback: (data: ResponseObject) => void):void
}

class Loader implements LoaderClass {
    baseLink: string;
    options: object
    constructor(baseLink:string, options:object) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp(param: paramGetResp, callback:()=>void):void {
        this.load('GET', param.endpoint, callback, param.options);
    }

    errorHandler(res:Response): Response {
        if (!res.ok) {
            if (res.status === 401 || res.status === 404)
                console.log(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw Error(res.statusText);
        }

        return res;
    }

    makeUrl(options: paramMakeUrl, endpoint:string):string {
        const urlOptions = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;

        Object.keys(urlOptions).forEach((key) => {
            url += `${key}=${urlOptions[key]}&`;
        });

        return url.slice(0, -1);
    }

    load(method:string, endpoint:string, callback:(data: ResponseObject)=> void, options = {}):void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
