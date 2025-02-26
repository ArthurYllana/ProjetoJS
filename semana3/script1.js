let arrayValores=[];

document.getElementById("form").addEventListener('submit', function(event){
    event.preventDefault();

    const inputValue = document.getElementById("inputValue").value.trim();

    if (inputValue){
        arrayValores.push(inputValue)
        arrayValores.sort();

        const orderedList = document.getElementById("orderedList");
        orderedList.innerHTML = '';

        arrayValores.forEach(values =>{
            const li = document.createElement('li');
            li.textContent = values;
            orderedList.appendChild(li);
        });
        document.getElementById('inputValue').value='';
    }
})