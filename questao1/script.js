const bottom = document.getElementById("buttom-sub");

var form = document.getElementById("form");
function handleForm(e) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

bottom.addEventListener("click", () => {
  const notaA = parseInt(document.getElementById("n1").value)
  const notaB = parseInt(document.getElementById("n2").value)
  const notaC = parseInt(document.getElementById("n3").value)
  
  
  
  const media = ((notaA + notaB + notaC) / 3)
  const mean = `Média do aluno: ${media}`

  var situacao = ""
  if(media >= 70){
      situacao = 'Aluno aprovado!'
  }else if (media >= 50){
      situacao = 'Aluno em recuperação!'
  }else {
      situacao = 'Aluno Reprovado!'
  }

    swal.fire({
    position: 'center',
    icon: 'success',
    title: `${situacao}`,
    text: `${mean}`
})
})                    