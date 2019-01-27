var btnCalcula = document.getElementById('calcular');
btnCalcula.addEventListener("click", function(){
    var tdPeso = document.getElementsByClassName('peso');
    var tdAltura = document.getElementsByClassName('altura');
    var tdImc = document.getElementsByClassName('imc');

    for(var i = 0; i < tdPeso.length; i++){
        var paciente = {peso: tdPeso[i].textContent,
                        altura: tdAltura[i].textContent,
                        calculaImc: function(){
                            return (this.peso / (this.altura * this.altura)).toFixed(2);
                        }
        };
        tdImc[i].textContent = paciente.calculaImc();
    }
});