const itemsSkills = document.querySelectorAll(".item")

itemsSkills.forEach(function (item) {
  item.addEventListener("click", function () {
    const ativado = document.querySelector(".ativo")
    if (ativado) {
      ativado.classList.remove("ativo")
    } else {
      item.classList.add("ativo")
    }
  })
})
document.getElementById("copy-email").addEventListener("click", function () {
  const textToCopy = 'mariocarlaibe@hotmail.com'
  navigator.clipboard.writeText(textToCopy)
  alert("E-mail Copiado!")
})
document.getElementById("copy-phone").addEventListener("click", function () {
  const textToCopy = '+5516993750372'
  navigator.clipboard.writeText(textToCopy)
  alert("Telefone Copiado!")
})
function handleScroll() {
  const work = document.querySelectorAll('.work');
  const triggerPoint = window.innerHeight / 1.2;
  
  work.forEach(item => {
    const workTop = item.getBoundingClientRect().top;

    if (workTop < triggerPoint) {
      item.classList.add('show')
    } else {
      item.classList.remove('show')
    }
  })
}
window.addEventListener('scroll', handleScroll)
handleScroll()

const toggleTheme = () => {
  const html = document.documentElement;
  const iconTheme = document.querySelector('.icon-theme')
  
  if (html.getAttribute('data-theme') === 'dark') {
    html.setAttribute('data-theme', 'light');
    iconTheme.innerHTML = `<i class="fa-regular fa-moon"></i>`
  } else {
    html.setAttribute('data-theme', 'dark');
    iconTheme.innerHTML = `<i class="fa-regular fa-sun"></i>`
  }
};

document.querySelector('#theme').addEventListener('click', toggleTheme);