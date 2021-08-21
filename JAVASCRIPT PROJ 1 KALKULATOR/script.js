function insert(num){
    document.form.hasil.value = document.form.hasil.value + num;
}

function equal(){
    const exp = document.form.hasil.value;
    if(exp){
        document.form.hasil.value = eval(exp);
    }
    console.log("hasil perhitungan anda adalah :" + eval(exp));
}

function clean(){
    document.form.hasil.value ="";
}

function back(){
    const exp = document.form.hasil.value;
    document.form.hasil.value = exp.substring(0,exp.length -1);
}
//triangle cal//

function equaltr(){
    var a = document.formtr.alas.value;
    var t = document.formtr.tinggi.value;
    var z = a / 2 * t;
    document.getElementById("hasiltr").innerHTML = ("luas segitiga : ") + z;
}
//trapeium cal//

function equaltrp(){
    var a = document.formtrp.alasa.value;
    var b = document.formtrp.alasb.value;
    var t = document.formtrp.tinggi.value;
    var y = parseInt(a) + parseInt(b);
    var z =  y * t / 2 ;
    document.getElementById("hasiltrp").innerHTML = ("Luas Trapesium : ") + z;
}

// circle cal //

function equalcrc(){
    var d = document.formcrc.diameter.value
    var j = d / 2
    var p = 22 / 7
    var k = p * d
    var l = p * j * j

    document.getElementById("hasilcrcl").innerHTML = ("Luas Lingkaran : ") + l;
    document.getElementById("hasilcrck").innerHTML = ("Keliling Lingkaran : ") + k;

}