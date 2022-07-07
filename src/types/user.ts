export interface User {
    firstName: string,
    lastName: string,
    name: string,
    googleId: string,
    imageUrl: string,
    email: string
}

export interface LoginUser {
    email: string,
    password: string
}