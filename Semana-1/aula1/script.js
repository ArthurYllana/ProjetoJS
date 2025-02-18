for(i=1; i<=6; i++)
    document.write("<h"+i+ ">Olá Fatec!</h" +i+ ">");

//lef é uma variavel que não permite sua mudança 

let nome = prompt("Digite o seu nome" , "");
if(confirm("Quer ver seu nome ? ")){ 
    alert("Seu nome é: " + nome);
}


// X = ++Y Apresenta a conta feita
// X = Y++ Faz a atribuição dos valores de Y no X -> A atribuição é feito antes da conta