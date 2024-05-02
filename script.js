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
    let input = document.getElementById("parametro");
    input.value = input.value.toLowerCase();

    let contenedor = document.getElementById("contenedor");

    let hijos = contenedor.childNodes;

    let hayResultado = false;

    for (let i = 0; i < hijos.length; i++)
    {
        console.log(hijos[i].innerHTML);        

        if (hijos[i].tagName == 'H1')
        {
            if (hijos[i].innerHTML.toLowerCase().indexOf(input.value) > -1)
            {
                hayResultado = true;
                hijos[i].removeAttribute('style');
            }
            else
            {
                hijos[i].setAttribute('style', 'display: none');
            }            
        }        
    }
}