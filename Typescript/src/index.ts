
let extincion:number=75_000_000;//number
let favorito:string="T-Rex";//string
let extintos=true;//boolean inferido
let afirmacion:boolean=false;//boolean declarado
let numeros:Array<number>=[1,2,3,4];//Array 
let numeros2:number[]=[2,5,6,7,8];//Array 

//numeros.map(x=>x.)//esto permite que segun el tipo de dato VScode te de los metodos correspondientes

let mercado:[number,string,boolean]=[1, "alejandro", true]//Tuplas propias de Ts
let fabrica:[number,string[]]=[1,["oso","perro"]]//Tupla con array interno
enum Talla{Small="s",Medium="m",Large="L"};//Enums son propios de Ts y generan una function en Js con los datos
const enum Tallas{Grande="Xl", ExtraGrande="XXL"};//Enum pero no declara function en Js solo de la constante que se requiere
enum Listado{Chica,Median,Gigante};//Enum pero que el orden por defecto es 0 para el primer elemento, 1 para el segundo etc...

//uniones (union types)
let variable:string|null|number=1// permite darle mas opciones a una misma variable 
// las funciones crean un IFEE -> inmediated invoked function expression (funcion  ejecutada inmediatamente)
function Saludo(params:string) {
    console.log(params)
    
}
Saludo("Hola");

// esto permite dessde las funciones declarar que tipo de datos permite recibir, dejando fuertemente tipado el desarrollo 

const enum LoadingState{Idle,Loading,Success,Error}
const estado = LoadingState.Success

//Objects

const objeto:{
    id:number,
    nombre:string,
}={id:1, nombre:'Alejandro'}

//Ejemplo con un objeto de tipos para crear mas obejtos de manera ordenada

type Direccion ={
    numero:number,
    calle:string,
    pais:string
}

type Persona ={
    readonly id:number,
    nombre:string,
    talla:Talla,
    direccion:Direccion
}

const objeto2:Persona={
    id:21,
    nombre:'Camila',
    talla:Talla.Small,
    direccion:{
        numero:1,
        calle:'siempre viva',
        pais:'Colombia'
    }
}

//podemos tener un array de que solomante contenga los tipos de datos creados previamente, como objetos 

const arr:Persona[]=[]