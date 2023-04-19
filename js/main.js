const toggleBtn = document.querySelector('.toggleTheme')
const container = document.querySelector('.container')

toggleBtn.addEventListener('click', () =>{
   container.classList.toggle('light')
})