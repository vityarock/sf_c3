"use strict";
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
const setbutton = document.querySelector('.setbutton');

citychange.onclick = () => {
  cityblock.classList.add('d-none')
  changeform.classList.remove('d-none');
  changebtn.classList.remove('d-none');
  
}

area.value = localStorage.getItem('area');
area.oninput = () => {
  localStorage.setItem('area', area.value);
  };

city.innerText = area.value || "Undefineberg";

let cookieRead = Cookies.getJSON('checkboxes') || "empty";
let lockStatus = Cookies.get('lock');
if (lockStatus == 'true') {
  lockCheckboxes();	
  checkbox1.checked = cookieRead['walking'];
  checkbox2.checked = cookieRead['reading'];
  checkbox3.checked = cookieRead['fishing'];
  checkbox4.checked = cookieRead['forestwalk'];
  checkbox5.checked = cookieRead['gardenwork'];
  checkbox6.checked = cookieRead['playmusic'];
  } 

setbutton.onclick = () => {
  Cookies.defaults = {
  path: '/',
  expires: 365
  };
  let checkboxes = getCheckboxValues();
  let stringCheckbox = JSON.stringify(checkboxes);
  Cookies.set('checkboxes', stringCheckbox);
  Cookies.set('lock', 'true')
  lockCheckboxes();
}

function getCheckboxValues() {
  let checkboxes = new Object();
  checkboxes['walking'] = checkbox1.checked;
  checkboxes['reading'] = checkbox2.checked;
  checkboxes['fishing'] = checkbox3.checked;
  checkboxes['forestwalk'] = checkbox4.checked;
  checkboxes['gardenwork'] = checkbox5.checked;
  checkboxes['playmusic'] = checkbox6.checked;
  return checkboxes;
}
function lockCheckboxes() {
  checkbox1.disabled = true;
  checkbox2.disabled = true;
  checkbox3.disabled = true;
  checkbox4.disabled = true;
  checkbox5.disabled = true;
  checkbox6.disabled = true;
}
