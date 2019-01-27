var btnAdiciona = document.getElementById("adicionar");
btnAdiciona.addEventListener("click", function(){
    pacienteNovo = {nome: document.getElementById("nome"),
               peso: document.getElementById("peso"),
               altura: document.getElementById("altura")
               };
    
    if(pacienteNovo.nome.value == "" || pacienteNovo.peso.value == "" || pacienteNovo.altura.value == ""){
        alert("Preencha o formulário");
    }else{
        var pacienteNovoTr = "<tr>"+
                            "<td>"+pacienteNovo.nome.value+"</td>"+
                            "<td class='peso'>"+pacienteNovo.peso.value+"</td>"+
                            "<td class='altura'>"+pacienteNovo.altura.value+"</td>"+
                            "<td class='imc'></td>"+
                        "</tr>";
        var tabela = document.querySelector("table");
        tabela.innerHTML += pacienteNovoTr;
    }
    
    pacienteNovo.nome.value = "";
    pacienteNovo.peso.value = "";
    pacienteNovo.altura.value = "";
});