import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
})

export const getProducts = async () => {
    const resp =  await axiosInstance("/products")
    return resp.data.products
};

export const postProduct = async body => {
    const formData = new FormData();

    Object.entries(body).forEach(([key, value]) => {
        formData.append(key, value);
    });

    const resp = await axiosInstance.post("/products", formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
    return resp.data.products
}

export const postOrder = async body => {
    const resp = await axiosInstance.post("/cart", body)
    return resp.data
}

export const postContacts = async body => {
    const resp = await axiosInstance.post("/contact", body)
    return resp.data
}

export const postPreferenceMp = async body => {
    const resp = await axiosInstance.post("/checkout", body)
    return resp.data
}



