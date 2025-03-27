import restImage from "../images/rest.jpg"
const div = document.getElementById("content");
const div2 = document.createElement("div");
div2.className = 'inner';


export function homeLoad() {
  div.appendChild(div2);
  
  const title = div2.appendChild(document.createElement('h1'));
  title.innerHTML = 'My Restaurant';
  const img = div2.appendChild(document.createElement('img'));
  img.src = restImage;
  const text = div2.appendChild(document.createElement('p'));
  text.innerHTML = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat rerum voluptate in inventore, minus quibusdam illum incidunt repudiandae, quis temporibus et, adipisci iste tempora quasi iure expedita atque laudantium animi?'
};

export function homeToggle(bool) {
  if(!bool) {
    div2.style.display = 'none';
    return 1;
  }
  div2.style.display = 'flex';
  return 1;
}

