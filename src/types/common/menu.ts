export interface MenuListT extends MenuT{
    children?: MenuT
}

interface MenuT{
    path: string
    name: string
}