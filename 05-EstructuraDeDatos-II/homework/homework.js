"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

function LinkedList() {
  this.head =  null;
}
  LinkedList.prototype.add= function(value){
    let newNode = new Node(value);
    if(!this.head){
      this.head = newNode;
    }else{
      let current = this.head;
      while(current.next){
        current = current.next;
      }
      current.next =newNode;
    }
  }
  LinkedList.prototype.remove= function(){
    let current = this.head;
    //esta vacia?
    if(!current) return null;
    //Caso en que la lista tenga solo 1 elemento.
    if(!current.next){ //current.next === null
      let returnValue = current.value; //variable para guardar el valor del current.
      this.head =null;
      return returnValue;
    }

    //caso en que la lista tenga mas de 2 elementos, si tiene 1 se rompe. No entra despues del if anterior.  
    while(current.next.next){
      current =current.next;
    }
     
  }
  LinkedList.prototype.search= function(argument){
     let current =this.head; // declaro una variable current qe apunte al head, es decir que de inicio al recorrido
     while(current){ //Si 'argument'` es un valor
      //pregunto si argument Es una funcion.
      if(typeof argument === 'function'){
        if(argument(current.value)){
          return current.value;
        }
      }else{
        // si 'argument' es un valor.
        if(current.value=== argument){
          return argument;
        }
      }
      current = current.next; // para que se mueva, sino caemos en un loop infinito
     } 

     //si sale del while es porque NO encontro el valor buscado.
     return null;

  }

function Node(value) {
  this.value =value;
  this.next = null; 
}

/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

function HashTable() {
  this.numBuckets = 35;
  this.buckets = [];

}
HashTable.prototype.hash= function(){

  let sum =0;
  for(let i =0; i < Key.length; i++){
    sum = sum + key.charCodeAt(i);
  }
  return sum % this.numBuckets;

}
HashTable.prototype.set= function(key, value){
  if(typeof key !== 'string') throw new TypeError('Keys must be strings')
  let bucketNumber = this.hash(key); 
  if(this.bucketNumber[bucketNumber]){
    this.buckets[bucketNumber]={};
  }
  this.buckets[bucketNumber]= value;
}
 

HashTable.prototype.get= function(key){
  let bucketNumber = this.hash(key); 
  return this.buckets[bucketNumber];
}

HashTable.prototype.hasKey= function(){


}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
