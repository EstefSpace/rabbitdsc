function hexToDecimal(hex) {
    return parseInt(hex.replace("#",""), 16)
}
try {
function message() {
    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let imageURL = document.getElementById("imagen").value;
    let footer = document.getElementById("footer").value;
    let colorEmbed = document.getElementById("colorEmbed").value;
    let webhook = document.getElementById("webhook_url").value;


    const request = new XMLHttpRequest();
request.open("POST", webhook);
// again, replace the url in the open method with yours
request.setRequestHeader('Content-type', 'application/json');
let msg = {
    "content": "[Genera un embed parecido](https://rabbitdsc.glitch.me/webhook/send.html)",
}
let yourEmbed = {
    
    "title": title,
    "description": description,
    "color": hexToDecimal(colorEmbed),
    "image": {
        "url": imageURL
    },
    "footer": {
        "text": footer + " | By RabbitBot"
    },
  
}

const params = {
    embeds: [ yourEmbed ]
}

if(webhook === "") {
    alert("Para enviar tu embed es necesario poner la url de tu webhook")
} else if (description === "")  { 
    alert("Para enviar tu embed es necesario poner la descripcion de tu webhook")
} else if(colorEmbed === "") {
    alert("Para enviar tu embed es necesario poner el color")
} else {

request.send(JSON.stringify(params, msg));
alert("Al hacer click en Aceptar tu embed se enviara. Si al contrario no se envio reporta el error en nuestro servidor de soporte")
}
}
} catch(err) {
    alert("Hubo un error al intentar enviar tu embed", err)
}