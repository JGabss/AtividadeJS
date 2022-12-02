const bottom = document.getElementById("buttom-sub");

var form = document.getElementById("form");
function handleForm(e) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

bottom.addEventListener("click", () => {
  var n = parseInt(document.getElementById("num").value)

  var quadrado = n ** 2
  var dobro = n * 2
  var triplo = n * 3
  var cubo = n ** 3
  var raiz = n ** 0.5
  
  swal.fire({
    position: 'center',
    icon: 'success',
    title: `Dobro: ${dobro}, triplo: ${triplo}, quadrado: ${quadrado}, cubo: ${cubo}, raiz: ${raiz}`,
    })
})