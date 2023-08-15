function solucao(letra, palavras) {
	
    let quantidadePerdedores =0;
    for (let i of palavras){
        const letraInicial = i[0]
        if(letraInicial!=letra){
           quantidadePerdedores++
           }
    }
    console.log(quantidadePerdedores);
}

