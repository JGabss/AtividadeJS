const bottom = document.getElementById("buttom-sub");

var form = document.getElementById("form");
function handleForm(e) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

bottom.addEventListener("click", () => {
  var word = new String(document.getElementById("palavra").value)
  
  swal.fire({
    position: 'center',
    icon: 'success',
    title: `${word}, comprimento: ${word.length} `,
    })
})