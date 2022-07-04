import { Product } from "../../types/products"
import { ProductInCart } from "../../types/cart"

const products: Product[] = [
    {
        id: 12,
        title: "Practical Plastic Pants",
        price: 325,
        description: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        category: {
            id: 3,
            name: "Furniture",
            image: "https://api.lorem.space/image/furniture?w=640&h=480&r=5254"
        },
        images: [
            "https://api.lorem.space/image/furniture?w=640&h=480&r=9756",
            "https://api.lorem.space/image/furniture?w=640&h=480&r=8328",
            "https://api.lorem.space/image/furniture?w=640&h=480&r=9449"
        ]
    },
    {
        id: 13,
        title: "Unbranded Rubber Tuna",
        price: 540,
        description: "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
        category: {
            id: 4,
            name: "Shoes",
            image: "https://api.lorem.space/image/shoes?w=640&h=480&r=9398"
        },
        images: [
            "https://api.lorem.space/image/shoes?w=640&h=480&r=2109",
            "https://api.lorem.space/image/shoes?w=640&h=480&r=498",
            "https://api.lorem.space/image/shoes?w=640&h=480&r=8503"
        ]
    },
    {
        id: 14,
        title: "Awesome Granite Chicken",
        price: 671,
        description: "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
        category: {
            id: 5,
            name: "Others",
            image: "https://api.lorem.space/image?w=640&h=480&r=3976"
        },
        images: [
            "https://api.lorem.space/image?w=640&h=480&r=6329",
            "https://api.lorem.space/image?w=640&h=480&r=777",
            "https://api.lorem.space/image?w=640&h=480&r=7700"
        ]
    },
]

export const productToCart: ProductInCart = {
    product: {
        id: 12,
        title: "Practical Plastic Pants",
        price: 325,
        description: "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        category: {
            id: 3,
            name: "Furniture",
            image: "https://api.lorem.space/image/furniture?w=640&h=480&r=5254"
        },
        images: [
            "https://api.lorem.space/image/furniture?w=640&h=480&r=9756",
            "https://api.lorem.space/image/furniture?w=640&h=480&r=8328",
            "https://api.lorem.space/image/furniture?w=640&h=480&r=9449"
        ]
    },
    quantity: 3
}

export default products