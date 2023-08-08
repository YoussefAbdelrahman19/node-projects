import axios from "axios";

const uploadFile = async (file) => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "fiverr");
    try {
        const res = await axios.post(`https://api.cloudinary.com/v1_1/dw9r0ur8m/image/upload`, data)
        const { url } = res.data;
        console.log('uploaded data', url)
        return url;
    }
    catch (error) {
        console.log('cloudinary error', error)

    }
}

export default uploadFile