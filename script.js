const demo = document.getElementById('demo');
const button = document.getElementById('btn');

const ul = document.createElement('ul');
const li = document.createElement('li');
const first = document.createTextNode('First new Text');
const second = document.createTextNode('Second Text Node');
const third = document.createTextNode('Third  Text Node');

li.appendChild(first);
// li.appendChild(second)
// li.appendChild(third)

ul.appendChild(li);
demo.appendChild(ul);

button.addEventListener('click', () => {
  demo.removeChild(ul);
  if (demo.hasChildNodes) return console.log('No Child Nodes');

  return console.log('Has child');
});
