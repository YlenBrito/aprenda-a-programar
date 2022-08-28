

let n = 2
let i = 2
let contador = 0
while (n<=100){

    i = 2
    contador = 0
    while (i*i<=n){
        if (n%i ==0){
            contador+=1
        }
        i+=1
    }
    if (contador>0){
        console.log(`O número ${n} não é primo.`)
    }
    else{
        console.log(`O número ${n} é primo.`)
    }
    n+=1
    


}