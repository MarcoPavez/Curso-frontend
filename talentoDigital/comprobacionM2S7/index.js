function comparadorNumeros (primerNumero, segundoNumero){
    if(primerNumero > segundoNumero){
        alert(primerNumero+" es mayor que "+segundoNumero)
    } else if(primerNumero < segundoNumero){
        alert(segundoNumero+" es mayor que "+primerNumero)
    } else{
        alert("Los números son iguales")
    }
}

comparadorNumeros(8,19)