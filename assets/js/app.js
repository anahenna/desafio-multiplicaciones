
const factorial = (numero) => {
    if (numero <= 1) return 1
    return numero * factorial(numero - 1)
}

const main = numero => {

    // si no ingresa numero
    if (!numero) {
        console.log('No ingresaste un número')
        return
    }

    // rango del numero
    if (numero < 1 || numero > 20) {
        console.log('Número fuera de rango')
        return
    }
    console.log('pasó la validacion')

    for (let i = 1; i <= numero; i++) {
        console.log(`${i} * ${numero} = ${i * numero}`)
    }
    for (let i = 1; i <= numero; i++) {
        console.log(`El factorial de ${i}! es: ${factorial(i)}`)
    }

}
let continuar = true
while (continuar) {
    const input = +prompt("Ingrese un número")
    main(input)
    continuar = confirm("¿Deseas agregar otro número?")
}