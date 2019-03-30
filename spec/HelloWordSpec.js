describe('Hello Word', ()=>{
	it('Resultado esperado da função helloWord', ()=>{
		var resultado = helloWord('Teste');
		expect(resultado).toEqual('Hello Teste');
	});
});