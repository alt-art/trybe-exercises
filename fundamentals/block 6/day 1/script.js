const selectEstate = document.querySelector('#estate');

fetch("estate.json").then((res) => {
    res.json().then((estates) => {
        estates.forEach(estate => {
            const option = document.createElement('option');
            option.innerText = estate.nome;
            option.value = estate.sigla;
            selectEstate.appendChild(option);
        });
    });
});