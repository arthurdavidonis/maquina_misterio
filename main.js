const btn_iframe = document.getElementById("btn");
const btn_closeIframe = document.getElementById("btn_fecharmap");
const container_iframe = document.getElementById("container_iframe");
let mapaAparecendo = true;
function mapShowOn(){
    document.getElementById("container_iframe").innerHTML += iframe_location;
    
}

btn_iframe.addEventListener('click', mapShowOn);


const iframe_location = `<iframe style="height:450px;" 
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.9185595607655!2d-53.04607502361883!3d-26.068917858479825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f072d9e58a062d%3A0x2353c63a2743555b!2sMario%20De%20Andrade%2C%20C%20E-Ef%20M%20N%20Prof!5e0!3m2!1spt-BR!2sbr!4v1694799790342!5m2!1spt-BR!2sbr" width="330" height="350" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;

