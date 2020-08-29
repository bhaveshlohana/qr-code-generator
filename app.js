let qrcode=new QRCode("qrcode");

document.getElementById("generate").addEventListener("click", function() {
    let text=document.getElementById("qrtext").value;

    if( text != "") {
        //new QRCode(document.getElementById("qrcode"), text);
        qrcode.makeCode(text);
    }
})

document.getElementById("reset").addEventListener("click", function() {
    document.getElementById("qrcode").innerHTML="";
    document.getElementById("qrtext").value="";
})