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
// city.style.display = 'none';
  cityblock.classList.add('d-none')
  changeform.classList.remove('d-none');
  changebtn.classList.remove('d-none');
  lockCheckboxes();
}

area.value = localStorage.getItem('area');
area.oninput = () => {
  localStorage.setItem('area', area.value);
  };

city.innerText = area.value || "Undefineberg";

let cookieRead = Cookies.getJSON('checkboxes') || "empty";
console.log(cookieRead['walking']);
let lockStatus = Cookies.get('lock');
console.log(typeof(lockStatus));
if (lockStatus == 'true') {
  lockCheckboxes();	
  console.log("status true")
  
checkbox1.checked = cookieRead['walking'];
checkbox2.checked = cookieRead['reading'];
checkbox3.checked = cookieRead['fishing'];
checkbox4.checked = cookieRead['forestwalk'];
checkbox5.checked = cookieRead['gardenwork'];
checkbox6.checked = cookieRead['playmusic'];
		
//   if (cookieRead['walking'] == 'true') checkbox1.checked = true;
//   if (cookieRead['reading'] == 'true') checkbox2.checked = true;
//   if (cookieRead['fishing'] == 'true') checkbox3.checked = true;
//   if (cookieRead['forestwalk'] == 'true') checkbox4.checked = true;
//   if (cookieRead['gardenwork'] == 'true') checkbox5.checked = true;
//   if (cookieRead['playmusic'] == 'true') checkbox6.checked = true;
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
