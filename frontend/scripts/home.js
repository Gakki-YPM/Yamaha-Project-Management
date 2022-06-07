let ajax = new XMLHttpRequest();
ajax.open('GET', '/projects', true);

ajax.onreadystatechange = () =>{
    if(ajax.status === 200 && ajax.readyState === 4){
        let response = JSON.parse(ajax.responseText);
        console.log(response);
        for(let i = 0; i < response.length; i++){
            $('#tableProjects').append(
                `<tr>
                    <td>${response[i].ProjetoID}</td>
                    <td>${response[i].Nome}</td>
                    <td>${response[i].Descricao}</td>
                    <td>${response[i].PrincipalResponsavel}</td>
                    <td>${response[i].DataInicial}</td>
                    <td>${response[i].DataFinal}</td>
                </tr>`
            );
        }
    }
}

ajax.send();