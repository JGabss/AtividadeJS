const bottom = document.getElementById("buttom-sub");

var form = document.getElementById("form");
function handleForm(e) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

bottom.addEventListener("click", () => {
  var num = parseInt(document.getElementById("num").value)

  var text = ""
  if (num > 0) {
     text = `positivo`
  } else if (num < 0) {
    text = `negativo`
  } else {
    text = "neutro"
  }
  swal.fire({
    position: 'center',
    icon: 'success',
    title: `o número ${num} é ${text}`,
    })
})