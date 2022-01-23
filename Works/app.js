const navbar = document.querySelector('.navbar-container')
const search = document.querySelector('.search')
const links = document.querySelector('.navlinks')
const search2 = document.querySelector('#search')
const expand = document.querySelector('#expand')
const input = document.querySelector('#input')

const expandNav = () =>{
    navbar.style.width="240px";
    search.style.cssText= `margin-left: 8px;  width: 170px;  background-color: var(--primary-color-light);`;
    links.style.cssText= ` width: 230px; background-color: var(--primary-color);`;
    search2.style.cssText= `
    display: flex;
    text-decoration: none;
    width: 230px;
    background-color: var(--primary-color);
    padding-right: 15px;
    border-radius: 10px;`;
    input.style.display = "flex";
}

expand.addEventListener('click', expandNav);
