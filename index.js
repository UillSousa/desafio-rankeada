    function saldo(vitorias, derrotas){
    return vitorias - derrotas
};

let resultado = saldo(30, 5);
let Rank = " ";

    if (resultado < 10)   
        Rank = "Ferro"    
    else if(resultado >=11 && resultado <=20){
        Rank = "Bronze"
    }else if(resultado >=21 && resultado <=50){
        Rank = "Prata"
    }else if(resultado >=51 && resultado <=80){
        Rank = "Ouro"
    }else if(resultado >=81 && resultado <=90){
        Rank = "Diamante"
    }else if(resultado >=91 && resultado <=100){
        Rank = "Lendario"
    }else if(resultado >=101){
        Rank = "Imortal"
    }

    console.log("O Heroi tem o saldo de " + resultado, "esta no nivel de " + Rank
    )

    


