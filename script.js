document.getElementById('calculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let operacion = document.getElementById('operacion').value;
    let resultado = calculate(operacion, num1, num2);

    document.getElementById('resultado').textContent = 'El resultado es: ' + resultado; 
});

function op(operator) {
    let a = parseFloat(document.getElementById('num1').value);
    let b = parseFloat(document.getElementById('num2').value);
    let ResultadoOP;

    switch(operator) {
        case 'Suma':
            ResultadoOP= a + b;
            break;
        case 'Resta':
            ResultadoOP= a - b;
            break;
        case 'Multiplicacion':
            ResultadoOP= a * b;
            break;
        case 'Division':
            ResultadoOP=  a / b;
            break;
        default:
            return 'Operación no válida';
            break;
    }
    document.getElementById('resultado').textContent = "El resultad es: "+ResultadoOP;

}