export interface ProductRequest {
    product: Product,
    images: string[]
}

export interface Product {
    id: string,
    productName: string,
    description: string,
    price: string,
    stock: string,
    storeId: string
}