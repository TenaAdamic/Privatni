const inputNesto = document.getElementById('input');

const listaIzlistaj = document.getElementById('lista');

const loadanje = document.getElementById('loading');


async function dobiPodatke(){

    try {

        loadanje.style.display = 'block';

        const response = await fetch('https://itunes.apple.com/search?term=indie&entity=song-db.json', {method: 'GET'});

        const responseData = await response.json(); 
        console.log(responseData);

        

        while(listaIzlistaj.firstChild){
            listaIzlistaj.removeChild(listaIzlistaj.firstChild);
        }

        

        const output = inputNesto.value;

        const dobiveno = {
            poruka: output
        };

        for(key in responseData){
            let elementListe = document.createElement('li');
            listaIzlistaj.appendChild(elementListe);
            elementListe.innerHTML = responseData[key].poruka;
        }

        loadanje.style.display = 'none';

    } catch(error){
        alert(error);
    }


}

inputNesto.addEventListener('input', dobiPodatke);

