describe('Calculadora ', ()=>{
	var calc;
 
    //This will be called before running each spec
    beforeEach(function() {
        calc = new Calculadora();
    });
 
    describe("Momento quando calculadora executa cálculos operações básicas", function(){
                 
        it("calculando soma entre os números", function() {
            expect(calc.somar(3,5)).toEqual(8);
        });
        
        it("calculando subtração entre os números", function() {
            expect(calc.subtrair(5,3)).toEqual(2);
        }); 

        it("calculando multiplicação entre os números", function() {
            expect(calc.multiplicar(10, 40)).toEqual(400);
        });
        
        it("calculando divisão entre os números", function() {
            expect(calc.dividir(4,2)).toEqual(2);
        });

        it("calculando divisão entre os números dividendo maior que divisor", function() {
            expect(function(){
            	calc.dividir(2,4)
            }).toThrow(new Error("Não pode executar operação: Número dividendo é maior que número divisor."));
        });


        it("calculando fatorial de um número", function() {
            expect(calc.fatorial(9)).toEqual(362880);
        });
                
        it("Exceção de erro levantada: Quando o número informado for negativo!", function() {
            expect(function() { 
                calc.fatorial(-7)                
            }).toThrow(new Error("Aqui não pode obter resultados de números negativos."));
        });
         
    });
});