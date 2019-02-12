interface Human{
    id: number,
    name: string,
    email: string
}

// address
interface Address{
    street: string,
    city: string,
    state: string,
    zipcode: number
}
interface Employee extends Human,Address{
}

//getUser:()=>string

