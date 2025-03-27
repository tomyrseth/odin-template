const div = document.getElementById("content");
const div2 = document.createElement("div");
div2.style.display = 'none';
div2.className = 'inner';

export function menuLoad() {
  div.appendChild(div2);
  const text = div2.appendChild(document.createElement('h1'));
  const text2 = div2.appendChild(document.createElement('p'));
  text.innerHTML = 'Here is our menu';
  text2.innerHTML = 'Huh, its empty';
};

export function menuToggle(bool) {
  if(!bool) {
    div2.style.display = 'none';
    return 1;
  }
  div2.style.display = 'flex';
  return 1;
}