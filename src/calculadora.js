Calculadora = function(){};

Calculadora.prototype.somar = function(num1,num2){
	return num1 + num2;
};

Calculadora.prototype.subtrair = function(num1, num2){
	return num1 - num2;
};

Calculadora.prototype.dividir = function(num1, num2){
	if(num2 > num1){
		throw new Error("Não pode executar operação: Número dividendo é maior que número divisor.");
	}
	return num1 / num2;
};

Calculadora.prototype.multiplicar = function(num1, num2){
	return num1 * num2;
};

Calculadora.prototype.fatorial = function(num) {
    if (num < 0) {
        throw new Error("Aqui não pode obter resultados de números negativos.");
    } else if (num == 1 || num == 0) {
        return 1;
    } else {
        return num * this.fatorial(num - 1);
    }
};
