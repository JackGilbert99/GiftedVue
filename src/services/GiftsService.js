import { giftsApi } from "./AxiosService";


class GiftsService {
    async getGifts(){
        const res = await giftsApi.get()
        console.log(res.data);
    }
}

export const giftsService = new GiftsService()