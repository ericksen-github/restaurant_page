import generateHome from './generateHome';
import generateMenu from './generateMenu'; 
import generateContact from './generateContact'; 

generateHome(); 

document.getElementById("menuTab").addEventListener("click", swapTab);
document.getElementById("contactTab").addEventListener("click", swapTab); 

function swapTab(e) {
    if (e.target.id == "homeTab") {
        document.getElementById("menuTab").addEventListener("click", swapTab);
        document.getElementById("contactTab").addEventListener("click", swapTab); 
        document.getElementById("homeTab").removeEventListener("click", swapTab); 
        generateHome(); 
    } else if (e.target.id == "menuTab") {
        document.getElementById("homeTab").addEventListener("click", swapTab); 
        document.getElementById("contactTab").addEventListener("click", swapTab); 
        document.getElementById("menuTab").removeEventListener("click", swapTab); 
        generateMenu(); 
    } else if (e.target.id == "contactTab") {
        document.getElementById("homeTab").addEventListener("click", swapTab); 
        document.getElementById("menuTab").addEventListener("click", swapTab);
        document.getElementById("contactTab").removeEventListener("click", swapTab); 
        generateContact(); 
    }
}