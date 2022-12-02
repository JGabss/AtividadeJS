const bottom = document.getElementById("buttom-sub");

var form = document.getElementById("form");
function handleForm(e) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

bottom.addEventListener("click", () => {
  var idade = parseInt(document.getElementById("idade").value)

  var text = ""
  if (idade > 0 & idade < 13) {
     text = `Criança`
  } else if (idade > 12 & idade < 18) {
    text = `Adolescente`
  } else if (idade > 17 & idade < 60) {
    text = "Adulto"
  } else {
    text = "Idoso"
  }
  swal.fire({
    position: 'center',
    icon: 'success',
    title: `${text}`,
    })
})