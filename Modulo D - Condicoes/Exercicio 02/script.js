function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var form_ano = document.getElementById("txtano");
    var result = document.getElementById("result");

    if (form_ano.value.length == 0 || form_ano.value > ano) {
        alert("Por Favor, digite os dados corretamente!");

    } else {
        var form_sex = document.getElementsByName("sexo");
        var idade = ano - Number(form_ano.value);
        var genero = "";

        var img = document.createElement("img");
        img.setAttribute("id", "foto");

        if (form_sex[0].checked) {
            genero = "HOMEM";
            if (idade >= 0 && idade < 12) {
                img.setAttribute("src", "images/kidboy.jpg");

            } else if (idade < 40) {
                img.setAttribute("src", "images/man.jpg");

            } else {
                img.setAttribute("src", "images/olderman.jpg");

            }
        } else if (form_sex[1].checked) {
            genero = "MULHER";
            if (idade >= 0 && idade < 12) {
                img.setAttribute("src", "images/kidgirl.jpg");

            } else if (idade < 40) {
                img.setAttribute("src", "images/woman.jpg");

            } else {
                img.setAttribute("src", "images/olderwoman.jpg");

            }
        }

        result.style.textAlign = "center";
        result.innerHTML = `Detectamos <strong>${genero}</strong> com <strong>${idade} ANOS.</strong>`;
        result.appendChild(img);
    }
}