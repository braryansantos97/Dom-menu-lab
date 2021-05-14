//task 1.0

const mainEl = document.querySelector('main');
const topMenuEl = document.querySelector('#top-menu');
//task 1.1

mainEl.style.backgroundColor = 'var(--main-bg)'

//task 1.2

mainEl.innerHTML = '<h1>SEI Rocks!</h1>'

//task 1.3

mainEl.classList.add('flex-ctr');

//task 2.1

topMenuEl.style.height = '100%';

//task 2.2

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

//task 2.3

topMenuEl.classList.add('flex-around');

//task 3.0

// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '/catalog'},
  {text: 'orders', href: '/orders'},
  {text: 'account', href: '/account'},
];

//task 3.1

for(let link of menuLinks){
  const a = document.createElement('a')
  console.log(a);
  a.setAttribute('href', link.href)
  a.textContent = link.text
  topMenuEl.appendChild(a);
}
