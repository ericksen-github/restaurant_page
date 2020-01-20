

function generateMenu() {

    const container = document.getElementById('contentContainer');
    const titleDiv = document.createElement("div");
    const textDiv = document.createElement("div"); 
  
    while(container.firstChild) {
      container.removeChild(container.firstChild); 
    }
  
    titleDiv.innerHTML = "Ericksen's Menu"; 
    titleDiv.id = "titleDiv"; 
    container.appendChild(titleDiv); 
  
    textDiv.innerHTML = "Enjoy the food!"
    textDiv.id = "textDiv"; 
    container.appendChild(textDiv); 
  }
  
  export default generateMenu