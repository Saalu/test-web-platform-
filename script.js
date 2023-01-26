const demo = document.getElementById('demo');
const button = document.getElementById('btn');
const button2 = document.getElementById('btn2');

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

button2.addEventListener('click', () => {
  // fetch('https://picsum.photos/list')
  fetch('data.txt').then((res) => console.log(res.txt()));
  // .then((data) => console.log(data));
});
