//-------Método flat

let exArray = [[1,2],[3,2]]

let flattened = exArray.flat(1)

console.log(flattened) //retorna o array flattened, que junta os arrays interiores de exArray (flattened = [1,2,3,2])

//se houver o array bem deep, e for necessário colocar em um unidimensional, mas não sabemos qual a dimensão do array original, podemos fazer o seguinte:

let deepArray = [1,[1,1],[[[[[[1]]]]]]]

let deepFlattened = deepArray.flat(Infinity)

console.log(deepFlattened)


//-------Método flatMap

let nums = [1,2,3]
let strings = ["one","two","three"]

let trial = nums.flatMap(function(element,index){
    return [element,strings[index]]
}) //é basicamente o Map + Flat

console.log(trial)

//-------Método reduceRight

let nombre = ['a','r','t','h','u','r']

let nomRed = nombre.reduce(function(initValue,element){
    return initValue +=element
},'')

let nomRedRight = nombre.reduceRight(function(initValue, element){
    return initValue+=element
})//é um reduce que, ao invés de começar da esquerda pra direita, começa da direita pra esquerda. Pode ser interessante para obter palíndromos mais facilmente

console.log(nomRed)
console.log(nomRedRight)

//-------Método copyWithin

let numbers = [2,5,8,9,14,17,3,1,0]

numbers.copyWithin(5,3,6)//mais fácil entender vendo

console.log(numbers)

let arr = [
    {item:"Bike", price:100},
    {item:"Toy", price:15},
    {item:"Radio", price:10},
    {item:"Phone", price:5},
    {item:"Candy", price:1000},
    {item:"Ring", price:250},
    {item:"Mic", price:10},
]
//-------Método filter

let filteredItems = arr.filter(function(element){
    return element.price <= 10
})

console.log(filteredItems)//filtra os elementos que obedecerem a condição do return e retorna um array com os objetos do array original que satisfizerem a condição

//-------Método map

let mappedItems = arr.map(function(item){
return item.item
})

console.log(mappedItems)//retorna um array com todos os itens, como nesse exemplo.

//-------Método some

let some = arr.some(function(element){
    return element.price>=3000
})

console.log(some)//retorna true ou false pra condição do return, se algum dos elementos do array obedecerem a condição, ele retorna true

//-------Método every

let every = arr.every(function(element){
    return element.price>=3
})

console.log(every)//retorna true ou false pra condição do return, se todos os elementos do array obedecerem a condição, ele retorna true

//-------Método reduce

let reduceMethod = arr.reduce(function(initValue, element){
    return initValue = initValue + element.price
},0)

console.log(reduceMethod)

//-------Método forEach

let arrEach = arr.forEach(function(element){
   let judgement = ''
    if(element.price >= 100 ){
       judgement = element.item + " é caro!"
    } else{
        judgement = element.item + " é barato!"
    }

    console.log(judgement)

    
}) //para cada item do array ele faz o que tá dentro da função. Função que não precisa de return

//-------Método find

let searchingItem = arr.find(function(element){
    return element.price === 10
})

console.log(searchingItem)//vai retornar o primeiro elemento (nesse caso, o objeto) que for encontrado no array que satisfaça a condição do return

//-------Método includes

let numss = [1,2,3,4,5,6,7]

console.log(nums.includes(1)) // verifica se o array possui ou não o item procurado

//-------Método join

let toBeJoined = [25,38,77,1,8]

let joinedString = toBeJoined.join('+')

console.log(joinedString) //transforma o array em uma string, usando o separador definido entre parênteses. Se nenhum separador for definido, "," é o default

//-------Método fill

let teams = ["Flamengo","Botafogo","Coritiba","Santos","Sport"]

console.log(teams.fill("Cruzeiro",2,4)) //Modifica o array original e substitui os elementos indicados com o elemento especificado. O primeiro argumento é o elemento que entrará no array, o segundo argumento é a partir de qual index do array o "fill" começará e o terceiro argumento é em qual ele irá parar. Vale frisar que se o terceiro argumento for 4, por exemplo, o fill irá até o index 3. O mínimo de argumentos para o método é 1.

//-------Método slice

let toBeSliced = [3,8,33,21,14,19,76]

let sliced = toBeSliced.slice(3,6)

console.log(sliced) //Como o próprio nome já diz, ele corta o array de acordo com os indexes especificados. O primeiro argumento é a partir de qual index o array será cortado, e o segundo é o limite de corte (o array será conrtado até o index2-1)

//-------Método splice

let aarr = ["Jan","Feb","Mar","Apr"]

aarr.splice(1,2,"Arthur")

console.log(aarr)//O splice remove ou adiciona elementos no array em um index especificado. O primeiro argumento do método é o index a partir de qual será feita a operação. O segundo argumento indica o número de elementos, a partir do elemento do index especificado no primeiro argumento, que serão removidos. O terceiro argumento é o elemento que será adicionado. Nesse método, o array original é modificado. Então, para o exemplo feito acima, iríamos remover 2 elementos a partir do index 1 de aarr ("Feb" e "Mar"), e adicionar, no index 1, o elemento "Arthur". Para não remover nenhum elemento, o segundo argumento é 0.




