/* PROGRAMACIÓN DEDICADA A OBJETOS
----------------------------------------------------------------
Constructores e Instancias
*/

//Voy a crear primero el constructor con la plantilla

function coche(marca, modelo, anyo, carburante){

    //Instrucciones para que funcione el constructor
        this.marca = marca;
        this.modelo = modelo;
        this.anyo = anyo;
        this.carburante = carburante;
}

/* Instancias
--------------------------------
Ahora voy a instanciar la función constructora con 10 marcas de coches diferentes 
Para ello utilizo la orden 'new' y creo una variable para cada coche */

var Peugeot = new coche('Peugeot', '206 GTI', 2004, 'Diesel');
var ToyotaAygo = new coche('Toyota', 'Aygo', 2019, 'Gasolina');
var ToyotaYaris = new coche('Toyota', 'Yaris', 2018, 'Híbrido');
var CitroenSaxo = new coche('Citroen', 'Saxo VTS', 2002, 'Diesel');
var SeatPanda = new coche('Seat', 'Panda 141A', 1982, 'Gasolina');
var RenaultTwizy = new coche('Renault', 'Twizy', 2019, 'Eléctrico');
var OpelCorsa = new coche('Opel', 'Corsa XHL', 2019, 'Gasolina');
var SeatMii = new coche('Seat', 'Mii', 2018, 'Eléctrico');
var OpelAdam = new coche('Opel', 'Adam XEL', 2018, 'Gasolina');
var FiatPunto = new coche('Fiar', 'Punto 55', 1993, 'Gasolina');
