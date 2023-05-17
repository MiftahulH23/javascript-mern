require('isomorphic-fetch');

fetch('https://dekontaminasi.com/api/id/covid19/hospitals')
    .then((response) => response.json())
    .then((data) => console.log(data))
    ;