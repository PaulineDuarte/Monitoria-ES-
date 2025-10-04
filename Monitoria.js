// // Variaveis em Javascript 
// var fullName = "Noah Wyle"; 

// let name = "Noah"; 


// // Reatribuição 
//  fullName = "Joao da Silva"; 
// console.log(fullName)
//  name = "Joao"; 
// console.log(name)

// // redeclarar
// var fullName = "Teste"
// console.log(fullName)


// // STRING 

// const Country = "Brasil" ; 

// console.log(typeof Country)


// console.log(Country.length)

// console.log(Country.toLowerCase())


// // Number 

// var num = 10.5789
// console.log(typeof num)

// console.log(num.toFixed(2))
// console.log(Math.round(num))


// console.log(5 == "5");  // == converte string para número 

// console.log(5 === "5") // 5 e 5 // number != string 


// var age = 20 ; 
// var hasID = false ;

// if(age >=18 && hasID){
//     console.log("Pode entrar na festa");
// } else if (age < 18 || !hasID) {
//     console.log("Não pode entrar na festa");
// };


// var age = 17 ; 
// var canDrive = age >= 18 ? "Pode dirigir" : "Não pode dirigir"; 
// // if (age >= 18) { canDrive = "Pode dirigir" } else { canDrive = "Não pode dirigir" }  
// console.log(canDrive);



// var day = 3 ; 

// switch(day) {       
//     case 1:
//         console.log("Domingo");
//         break;  

//     case 2:
//         console.log("Segunda");
//         break;      
//     case 3:
//         console.log("Terça");
//         break
//     case 4:
//         console.log("Quarta");
//         break;  

//     case 5:
//         console.log("Quinta");
//         break;  
//     case 6:
//         console.log("Sexta");
//         break;  

//     case 7:
//         console.log("Sábado");
//         break;  
//     default:
//         console.log("Dia inválido");
//         break;  
// }


// let aluno = {
//   nome: "Carlos",
//   curso: "Ciência da Computação",
//   matricula: "202512345",
//   ativo: true,


//   apresentar : function () {
//     console.log("Olá, meu nome é " + this.nome + ".")
//   }
// }


// console.log(aluno.nome)

// console.log(aluno["matricula"])

// aluno.apresentar()


let frutas = ["Maçã", "Banana", "Laranja"];

console.log(frutas)


function soma (a,b) {
    return a + b
}

var result = soma(10,5)

console.log(result) // 15 


// arrow fuction => 

const somaArrow = (a,b) => {return a+ b}; 

console.log(somaArrow(20,5)) // 25 