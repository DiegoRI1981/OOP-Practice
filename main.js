// //OBJETO
// const Comida = {
//     //PROPIEDADES - key: "value"    
//     id: 1,
//     name: "manzana",
//     color: "rojo"
// }

// console.log(Comida.name),

//CLASE
class Comida {
    constructor(id, name, color) {
        this.id = id,
            this.name = name,
            this.color = color
    }
    //Métodos
    method() {
        return `${this.name} es de color ${this.color}`
    }
};

//INSTANCIAR
const manzana = new Comida(1, "manzana", "rojo");
const pera = new Comida(2, "pera", "verde");

console.log(manzana);
console.log(pera);

console.log(manzana.method())
console.log(pera.method())



//HERENCIA
class Galleta extends Comida {
    constructor(id, name, color, sabor) {
        super(id, name, color)
        this.sabor = sabor
    }
    createGalleta() {
        return `La galleta ${this.name} es de color ${this.color} y tiene un sabor ${this.sabor}`
    }
}

const oreo = new Galleta(3, "Oreo", "negro", "chocolate")
const chokis = new Galleta(3, "Chokis", "marrón", "vainilla")

console.log(oreo)
console.log(chokis)
console.log(oreo.createGalleta())
console.log(chokis.createGalleta())

//___________________________________________________________________________________________

//Class
class Pet {
    //Constructor = Attributes
    constructor(name, type, color, age, breed) {
        //keys: "values"
        this.name = name,
            this.type = type
        this.color = color,
            this.age = age,
            this.breed = breed
    }
    //Methods
    talk() {
        //Polymorphism
        if (this.type === 'perro') {
            return `Mi nombre es ${this.name} y soy de tipo ${this.type}, tengo color ${this.color}, edad ${this.age}, de raza ${this.breed} y hago waw waw.`
        }
        else (this.type === 'gato')
        return `Mi nombre es ${this.name} y soy de tipo ${this.type}, tengo color ${this.color}, edad ${this.age}, de raza ${this.breed} y hago miau miau.`

    }
    //ststic method
    static info() {
        return `Soy una mascota.`
    }

}

console.log(Pet.info())

//Instanciar: with the word 'new'
const pet1 = new Pet('Kay', 'perro', 'blanco', 6, 'única')
const pet2 = new Pet('Tula', 'perro', 'blanco con manchas', 16, 'Jack Russell')
const pet3 = new Pet('Fronzio', 'gato', 'gris', 4, 'techero')

console.log(pet1)
console.log(pet2)

console.log(pet1.talk())
console.log(pet2.talk())
console.log(pet3.talk())


//Inheritance
class Disease extends Pet {
    constructor(name, type, color, age, breed, disease) {
        super(name, type, color, age, breed)
        this.disease = disease
    }
    //Methods
    diagnosis() {
        return `${this.name}, que es un ${this.type} de color ${this.color}, que tiene ${this.age} años y es de raza ${this.breed}, tiene una enfermedad llamada ${this.disease}`
    }
}
const diseasePet = new Disease('Fronzio', 'gato', 'gris', 4, 'techero', 'tuberculosis')
console.log(diseasePet)
console.log(diseasePet.diagnosis())

