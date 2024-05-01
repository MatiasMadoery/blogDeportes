function DesplegarMenuHam() 
{
    var desplegarMenu = document.getElementById('navHambur')

    if(desplegarMenu){
        if(desplegarMenu.className == 'navHamburCerrado'){
            desplegarMenu.className = 'navHambur'
        }
        else{
            desplegarMenu.className = 'navHamburCerrado'
        }
    } 
}