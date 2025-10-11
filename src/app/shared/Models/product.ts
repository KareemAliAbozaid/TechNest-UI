import { IProductImage } from "./image"

export interface IProduct {
    id: number
    name: string
    description: string
    newPrice: number
    oldPrice: number
    categoryName: string
    productImages: IProductImage[]
    selectedImage: string | null;

}


