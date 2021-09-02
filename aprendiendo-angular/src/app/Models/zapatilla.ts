export class Zapatilla{
    public Nombre:string;
    public Precio:number;
    public Marca:string;
    public Color:string;
    public Stock:boolean;

    constructor(nombre:string, marca:string, color:string, precio:number, stock:boolean){
        this.Nombre = nombre;
        this.Marca = marca;
        this.Color = color
        this.Precio = precio;
        this.Stock = stock;
    }
}