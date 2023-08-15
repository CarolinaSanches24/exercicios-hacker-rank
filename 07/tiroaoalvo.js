function solucao(disparos) {
	
    let quantDisparosMaior=0; 
    let mensagem;
    for(let i =0; i<disparos.length;i++){
        if(disparos[i]>70){
            quantDisparosMaior++
            
        }
    }
    if(quantDisparosMaior>=3){
               //aprovado
                mensagem=quantDisparosMaior
               }else{
                   mensagem='ELIMINADO'
               }
    console.log(mensagem)
}
