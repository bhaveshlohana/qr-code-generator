var text=$("#text").val();



function qrwork() {
	if(text!=$("#text").val()) {
		$("#qrcode").qrcode(text);
	}
}

function clr() {
		text=''
		$("#qrcode").html("");
	
}
/*function _(e, all=false) {
    let divs = document.querySelectorAll(e);
    if (all || (divs.length > 1)) { return divs; }
    return divs[0];
}


function download(){
    let link = document.createElement('a');
    let qr=_("#qrcode"); 

    link.setAttribute('download', 'mandala.png');
    link.setAttribute('href', qr.toDataURL("image/png").replace("image/png", "image/octet-stream"));
    link.click();
}
*/