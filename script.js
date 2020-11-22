fetch("https://covid19-api.org/api/status/pl")   
    .then(function (resp) { return resp.json() }) 
    .then(function (data) {
        console.log(data);
        document.querySelector("#ilecasow").innerText = `${data.cases} zarażeń`;
        document.querySelector("#ilesmierci").innerText = `${data.deaths} śmierci`;
        document.querySelector("#ilerecoverow").innerText = `${data.recovered} uleczono`;
    })
    .catch(function (err) {
        alert(`Wystąpił błąd! Spróboj ponownie później. Bład: ${err}.`)
    });