const div = document.getElementById("content");
const div2 = document.createElement("div");
div2.style.display = 'none';
div2.className = 'inner';

export function aboutLoad() {
  div.appendChild(div2);
  const text = div2.appendChild(document.createElement('p'));
  text.innerHTML = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat rerum voluptate in inventore, minus quibusdam illum incidunt repudiandae, quis temporibus et, adipisci iste tempora quasi iure expedita atque laudantium animi?'
};

export function aboutToggle(bool) {
  if(!bool) {
    div2.style.display = 'none';
    return 1;
  }
  div2.style.display = 'flex';
  return 1;
}


