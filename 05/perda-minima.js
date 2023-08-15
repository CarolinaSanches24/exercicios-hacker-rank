function solucao(precos) {
  // imprima a quantidade minima de dinheiro que Leticia deve perder se comprar a casa
    //e revende-la 
let QuantMinima = 200;
for (let x =0; x<precos.length; x++){
    for (let y = x+1; y<precos.length; y++){
         const compraCasa = precos[x];
         const VendeCasa = precos[y];
         const prejuizo = compraCasa-VendeCasa
        if (prejuizo >0){
            if(prejuizo<QuantMinima){
             QuantMinima=prejuizo
             }
         }
    }
}
  console.log(QuantMinima) 
}