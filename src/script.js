const changebtn = document.querySelector('.city-change')
const city = document.querySelector('.city')
const citychange = document.querySelector('.city-change')

citychange.onclick = () => {

}

area.value = localStorage.getItem('area');
    area.oninput = () => {
      localStorage.setItem('area', area.value)
    };