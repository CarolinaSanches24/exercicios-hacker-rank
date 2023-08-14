function solucao(precos) {
    
    let total = 0;
    let menor=precos[0];
    for (let x of precos){
        total+=x
        if(x<menor){
              menor= x
             
         }
    }
    if(precos.length>=5){
     console.log(total-menor)
    }else{
         console.log(total)
}
   
    
}