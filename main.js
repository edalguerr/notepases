 var zapatos = ["Tenis negros nike", "zapatos clasicos jordan", "zapatos puma", "botas convert deluxe", "abarca 3 esquinas", "chancletas mata tigre"];
 var refBotones = [];
 var mensaje = "";
 var link = "";

 for (var i = 0; i < zapatos.length; i++) {
    refBotones[i] = document.getElementById(i+"");             
    mensaje = 'Hola, he visto tu anuncio "' +  zapatos[i] +'"'  +", deseo conocer mas información";
    refBotones[i].href = "https://api.whatsapp.com/send?phone=[57][3106022481]&text=" + mensaje;
 }