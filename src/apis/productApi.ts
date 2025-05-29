import instance from "@/configs/axiosConfig"
import type { CreateProduct, Product } from "@/types/product.type";


 const productApi = {
    //get all
    getAll: async () => {
        const response = await instance.get('/products');
        return response.data;
    },

    //delete by id
    delete : async (id : string) => {
        const response = await instance.delete(`/products/${id}`);
        return response.data;
    },

    //create 
    create : async (payload : CreateProduct) => {
        const response = await instance.post('/products', payload);
        return response.data;
    },

    //detail
    detail : async (id: string) : Promise<Product> => {
        const response = await instance.get(`/products/${id}`);
        return response.data;
    }, 
    //edit
    edit : async (id : string ,payload: CreateProduct) => { 
        const response = await instance.put(`/products/${id}`, payload);
        return response.data;
    }

}
export default productApi