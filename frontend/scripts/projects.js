function getProjects(){
    let url = "/projects"

    let xhttp = new XMLHttpRequest()
    xhttp.open("get", url, false)
    xhttp.send()

    let Data = JSON.parse(xhttp.responseText)
    Data.forEach((element, index) => {
        document.getElementById("tbody").innerHTML += `
            <tr>
                <td>${element.Nome}</td>
                <td>${element.Descricao}</td>
                <td>${element.Cidade}</td>
                <td>${element.PrincpalResponsavel}</td>
                <td>${element.DataInicial}</td>
                <td>${element.DataFinal}</td>
                <td>
                <span class="status-pending">Andamento</span>
                </td>
            </tr>
        `
    });
}
getProjects()