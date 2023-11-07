"use strict";
let extincion = 75000000;
let favorito = "T-Rex";
let extintos = true;
let afirmacion = false;
let numeros = [1, 2, 3, 4];
let numeros2 = [2, 5, 6, 7, 8];
let mercado = [1, "alejandro", true];
let fabrica = [1, ["oso", "perro"]];
var Talla;
(function (Talla) {
    Talla["Small"] = "s";
    Talla["Medium"] = "m";
    Talla["Large"] = "L";
})(Talla || (Talla = {}));
;
;
var Listado;
(function (Listado) {
    Listado[Listado["Chica"] = 0] = "Chica";
    Listado[Listado["Median"] = 1] = "Median";
    Listado[Listado["Gigante"] = 2] = "Gigante";
})(Listado || (Listado = {}));
;
let variable = 1;
function Saludo(params) {
    console.log(params);
}
Saludo("Hola");
const estado = 2;
const objeto = { id: 1, nombre: 'Alejandro' };
const objeto2 = {
    id: 21,
    nombre: 'Camila',
    talla: Talla.Small,
    direccion: {
        numero: 1,
        calle: 'siempre viva',
        pais: 'Colombia'
    }
};


//# sourceMappingURL=index.js.map