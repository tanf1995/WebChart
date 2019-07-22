import axios from '@/request';


interface ImageData{
    data: string,
    suffix: string
}
const uploadImgApi = {
    post(image: ImageData){
        return axios({
            url: "/upload/img",
            method: "POST",
            data: {
                data: image.data,
                suffix: image.suffix
            }
        })
    }
}

export {
    uploadImgApi
}