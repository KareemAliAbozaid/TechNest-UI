import { IProduct } from "./product"

export interface IPagination {
    pageNumber: number
    pageSize: number
    totalRecords: number
    data: IProduct[]
}