export type Product = {
    id: string;
    title: string;
    price: number;
    desc: string;
    sale : number;
}
export type CreateProduct = Omit<Product, 'id'>;
export type UpdateProduct = Omit<Product, 'id'>; 