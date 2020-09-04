const changeform = document.querySelector('.city-form');
const changebtn = document.querySelector('.city-btn');
const cityblock = document.querySelector('.city-label');
const citychange = document.querySelector('.city-change');
const city = document.querySelector('.city')
const checkbox1 = document.querySelector('#button1');
const checkbox2 = document.querySelector('#button2');
const checkbox3 = document.querySelector('#button3');
const checkbox4 = document.querySelector('#button4');
const checkbox5 = document.querySelector('#button5');
const checkbox6 = document.querySelector('#button6');

citychange.onclick = () => {
// city.style.display = 'none';
  cityblock.classList.add('d-none')
  changeform.classList.remove('d-none');
  changebtn.classList.remove('d-none');

}

area.value = localStorage.getItem('area');
area.oninput = () => {
  localStorage.setItem('area', area.value);
  };
city.innerText = area.value || "Undefineberg";
