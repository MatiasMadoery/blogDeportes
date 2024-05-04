function DesplegarMenuHam() 
{
    var desplegarMenu = document.getElementById('navHambur')

    if(desplegarMenu)
    {
        if(desplegarMenu.className == 'navHamburCerrado')
        {
            desplegarMenu.className = 'navHambur'
        }
        else
        {
            desplegarMenu.className = 'navHamburCerrado'
        }
    } 
}

function Buscar() {
    let entrada = document.getElementById("parametro");
    let terminoBuscado = entrada.value.toLowerCase();
    
    let secciones = document.querySelectorAll("#contenedor section");
    
    secciones.forEach(seccion => {
        let titulo = seccion.querySelector("h1");
        if (titulo) {
            if (titulo.textContent.toLowerCase().includes(terminoBuscado)) {
                seccion.removeAttribute('style');
            } else {
                seccion.setAttribute('style', 'display: none');
            }
        }
    });
}