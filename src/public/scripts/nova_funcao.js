let btnCreateFunction = document.getElementById('createFunction');

btnCreateFunction.addEventListener('click', () =>{

        var title = document.getElementById("functitulo").value;
        var area = document.getElementById("funcarea").value;

    if(title && area){
        var url = "/role";
        $.ajax({
            type: "POST",
            url: url,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify(
                {
                    "Titulo": title,
                    "Area": area
                }
            )
        });
        alert('Função cadastrada com sucesso!');
    } else {
        alert('Por favor preencha todos os campos!');
    }
});