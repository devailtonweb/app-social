export interface User {
    email: string
    password: string
}

export interface NewUser {
    name: string
    lastName: string
    email: string
    password: string
    document: string
    phone: string
}

export interface UserToken {
    id?: string | number
    name?: string
    email?: string
}
