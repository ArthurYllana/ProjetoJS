let num = prompt("Digite um número inteiro positivo: ", "");

if (num <= 1) {
    alert("O número " + num + " não é primo.");
} 
else {
    let primo = true;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            primo = false;
            break;
        }
    }

    if (primo) {
        alert("O número " + num + " é primo!");
    } else {
        alert("O número " + num + " não é primo.");
    }
}
