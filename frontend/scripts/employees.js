function getEmployees(){
    let url = "/employees"

    let xhttp = new XMLHttpRequest()
    xhttp.open("get", url, false)
    xhttp.send()

    let Data = JSON.parse(xhttp.responseText)
    console.log(Data)
}
getEmployees()