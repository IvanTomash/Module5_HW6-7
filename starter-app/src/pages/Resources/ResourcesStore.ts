import {
    action, makeAutoObservable,
    makeObservable,
    observable,
    runInAction,
} from "mobx";
import {IResource} from "../../interfaces/resources";
import * as resourceApi from "../../api/modules/resources";


class ResourcesStore {
    users: IResource[] = [];
    totalPages = 0;
    currentPage = 1;
    isLoading = false;

    constructor() {
        // makeObservable(this, {
        //     users: observable,
        //     totalPages: observable,
        //     currentPage: observable,
        //     isLoading: observable,
        //     changePage: action,
        // });
        makeAutoObservable(this);
        runInAction(this.prefetchData);
    }

   async changePage(page: number) {
        this.currentPage = page;
        await this.prefetchData();
    }

    prefetchData = async () => {
        try {
            this.isLoading = true;
            const res = await resourceApi.getByPage(this.currentPage)
            this.users = res.data;
            this.totalPages = res.total_pages;
        } catch (e) {
            if (e instanceof Error) {
                console.error(e.message)
            }
        }
        this.isLoading = false;
    };
}

export default ResourcesStore;