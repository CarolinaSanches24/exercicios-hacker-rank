function solucao(palpite, palavra) {
	// mostrar quantidade de acertos do palpite
    //receber a letra palpite do usuario e a palavra escondida
    //A quantidade de vezes que o palpite a do jogador aparece na palavra abelha e 2.
    let QuantAcertos =0;
    for (let letra =0; letra<palavra.length;letra++){
        if(palavra[letra]===palpite){
            QuantAcertos++
        }
    }
    console.log(QuantAcertos)
    
}