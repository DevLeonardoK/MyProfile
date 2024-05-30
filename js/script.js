function togglemode() {
  const html = document.documentElement;

  //Metodo 1

  //   if (html.classList.contains("light")) {
  //         //Verificando se no HTML, na lista de classes, possui alguma chamada como "light"
  //     html.classList.remove("light");

  //   }else{
  //     html.classList.add("light")
  //   }

  //Metodo 2
  html.classList.toggle("light");
  //Remover e adicionar a class "light"

  //img
  const img = document.querySelector(".profile img");
  if (html.classList.contains("light")) {
    img.setAttribute("src", "img/avatar.png");
  } else {
    img.setAttribute("src", "img/avatar-dark.png");
  }
  //validação troca da img
}
