export interface Persona{
    id:number
    nombre: string
    apellido: string
    email: string
    telefono: number
    edad: number
}

export let ListaPersonas: Persona[] = [
    {
        id:1,
        nombre:'Jose',
        apellido: 'Yeverino',
        email: 'luisyn7@gmail.com',
        telefono: 8181861732,
        edad:22
    },
    {
        id:2,
        nombre:'Daniel',
        apellido: 'Martinez',
        email: 'dani@hotmail.com',
        telefono: 8767651425,
        edad:20
    },
    {
        id:3,
        nombre:'Tomas',
        apellido: 'Valdez',
        email: 't.valdez@gmail.com',
        telefono: 8181672456,
        edad:25
    },
]