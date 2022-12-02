const bottom = document.getElementById("buttom-sub");

var form = document.getElementById("form");
function handleForm(e) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

bottom.addEventListener("click", () => {
  var x, value;
  x = document.getElementById("num").value;
  if ((x === 1)) {
      value = x, " = Janeiro";
  } else {
      if ((x === 2)) {
          value = x, " = Fevereiro";
      } else {
          if ((x === 3)) {
              value = x, " = Março";
          } else {
              if ((x === 4)) {
                  value = x, " = Abril";
              } else {
                  if ((x === 5)) {
                      value = x, " = Maio";
                  } else {
                      if ((x === 6)) {
                         value = x, " = Junho";
                      } else {
                          if ((x === 7)) {
                              value = x, " = Julho";
                          } else {
                              if ((x === 8)) {
                                  value = x, " = Agosto";
                              } else {
                                  if ((x === 9)) {
                                      value = x, " = Setembro";
                                  } else {
                                      if ((x === 10)) {
                                          console.log(x, " = Outubro");
                                      } else {
                                          if ((x === 11)) {
                                              value = x, " = Novembro";
                                          } else {
                                              if ((x === 12)) {
                                                  value = x, " = Dezembro";
                                              } else {
                                                  value = "Não existe um mês com esse número!";
                                              }
                                          }
                                      }
                                  }
                              }
                          }
                      }
                  }
              }
          }
      }
  }

  swal.fire({
    position: 'center',
    icon: 'success',
    title: `${value} `,
    })
})




