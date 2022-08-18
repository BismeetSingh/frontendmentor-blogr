

const toggleNavMenu = ()=>{
    const menuIcon = document.getElementsByClassName('menu-icon')[0];
    const closeIcon =  document.getElementsByClassName('menu-icon')[1];
    const navMenu = document.getElementsByClassName('nav')[0];
    const headerContent = document.getElementsByClassName('header-content')[0];
    const startContainer = document.getElementsByClassName('start-container')[0];
    const navClassList = navMenu.classList;
    // const subMenu =  document.getElementsByClassName('submenu')[0];
    // debugger;
    if (navClassList.contains('inactive')){
        navMenu.classList.remove('inactive');
        headerContent.classList.add('inactive');
        startContainer.classList.add('inactive');
        closeIcon.classList.add('visible-icon');
        menuIcon.classList.remove('visible-icon');
    }
    else{
        navMenu.classList.add('inactive');
        headerContent.classList.remove('inactive');
        startContainer.classList.remove('inactive');
        menuIcon.classList.add('visible-icon');
        closeIcon.classList.remove('visible-icon');
        
    }
}

const toggleSubMenu = () => {
    const subMenu = document.getElementsByClassName('submenu')[0];
    const expandIcon =  document.getElementsByClassName('expand-collapse-icon')[2];
    if (subMenu.classList.contains('inactive-li')){
        subMenu.classList.remove('inactive-li');
        expandIcon.classList.remove('rotate');
    }
    else{
        subMenu.classList.add('inactive-li');
        expandIcon.classList.add('rotate');
    }
}