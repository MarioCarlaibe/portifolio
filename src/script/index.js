/* <button id="copyButton">
  <i class="fas fa-copy"></i> Copiar
</button>
<input type="text" id="textToCopy" value="Texto a ser copiado" readonly>

<script>
  document.getElementById("copyButton").addEventListener("click", function () {
    const textToCopy = document.getElementById("textToCopy");
    textToCopy.select();
    document.execCommand("copy");
    alert("Texto copiado!");
  });
</script> */

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

