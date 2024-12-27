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