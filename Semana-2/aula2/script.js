document.addEventListener("DOMContentLoaded", function()
{
    document.getElementById('MeuBotao').addEventListener("click",minhaFuncao)
    function minhaFuncao(){
        let t = document.getElementById("MeuInput").value;
        console.log(t);
    }
});