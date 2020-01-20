

function generateContact() {

    const container = document.getElementById('contentContainer');
    const titleDiv = document.createElement("div");
    const textDiv = document.createElement("div"); 
  
    while(container.firstChild) {
      container.removeChild(container.firstChild); 
    }
  
    titleDiv.innerHTML = "Ericksen's Contact Info"; 
    titleDiv.id = "titleDiv"; 
    container.appendChild(titleDiv); 
  
    textDiv.innerHTML = "Give us a call!"
    textDiv.id = "textDiv"; 
    container.appendChild(textDiv); 
  }
  
  export default generateContact