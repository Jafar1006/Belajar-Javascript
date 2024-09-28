function fungsi() {
    alert ("halo, salam kenal aku Ja'far") ;
    var kuis = confirm ('kamu mau coba codingan aku gk?') ;
    var pass = prompt ('sebelum mulai coba kamu masukan password dulu!') ;
    if ( pass == 1010 ) {
        alert ('password benar!') ;
        while ( kuis === true ) { 
            var angka = prompt ('sekarang masukan nomor yang kamu suka') ;
            alert ('ohh, nomor yang kamu suka itu nomor ' + angka ) ;
            var nama = prompt ('siapa nama kamu?') ;
            alert ('oke nama kamu ' + nama + ' ya salam kenal ya') ;
            var kuis = confirm ('mau coba lagi?') ;
        }
        alert ('ok pertanyaan terakhir!') ;
        var pertanyaan = confirm ('apakah aku ganteng?') ;

        while ( pertanyaan === false ) {
            var pertanyaan = confirm ('apakah aku ganteng ;v ') ;
        }

        alert ('ok makasih yak udah bilang ganteng!') ;
        } 
    else if ( pass == 1616 ) {
        var dongo = confirm ('Dian D na Dongo, setuju? setuju') ;
        while ( dongo === false ) {
            var dongo = confirm ('Dian D na Dongo, setuju? setuju') ;     
        } 
    }
    else {
        alert ('password yang anda masukan salah! ') ;
        }
}


var n = 5   ;
var r = ''  ;

for (var row = 0; row <=n; row++ ) {
    for (var space = 0; space<=n; space++) {
    r += ''; 
}
}
console.log(r)

let x = 1
while (x <=100) {
    if (x % 2 !== 0) {
    console.log('data ke ', x)
    }
    x++
}