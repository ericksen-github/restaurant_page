

function generateHome() {

  const container = document.getElementById('contentContainer');
  const titleDiv = document.createElement("div");
  const img = document.createElement("img"); 
  const textDiv = document.createElement("div"); 

  while(container.firstChild) {
    container.removeChild(container.firstChild); 
  }

  titleDiv.innerHTML = "Ericksen's Seafood Shack"; 
  titleDiv.id = "titleDiv"; 
  container.appendChild(titleDiv); 

  img.src = "assets/images/seafoodHome.jpg"; 
  img.style.height = "400px"; 
  img.id = "homeImage"; 
  container.appendChild(img); 

  textDiv.innerHTML = "We have the best seafood in South Dakota!"
  textDiv.id = "homeText"; 
  container.appendChild(textDiv); 
}

export default generateHome