const bottom = document.getElementById("buttom-sub");

var form = document.getElementById("form");
function handleForm(e) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

bottom.addEventListener("click", () => {
  var valor = parseInt(document.getElementById("m").value)
  var mm = valor * 1000
  var cm = valor * 100
  var dm = valor * 10
  var dcm = valor / 10
  var hec = valor / 100
  var km = valor / 1000
  
  swal.fire({
    position: 'center',
    icon: 'success',
    title: `${cm} cm 
    ${mm} mm
    ${dm} dm
    ${dcm} decimetros 
    ${hec} hectometros
    ${km} km`,
    })
})