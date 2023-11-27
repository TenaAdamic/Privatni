const inputNesto = document.getElementById('input');

const listaIzlistaj = document.getElementById('lista');

const loadanje = document.getElementById('loading');


async function dobiPodatke(){

    try {

        loadanje.style.display = 'block';


        const response = await fetch('https://itunes.apple.com/search?term=indie&entity=song');

        const responseData = await response.json(); 

        while(listaIzlistaj.firstChild){
            listaIzlistaj.removeChild(listaIzlistaj.firstChild);
        }

    

        for(key in responseData){
            console.log(responseData[key]);
            let elementListe = document.createElement('li');
            listaIzlistaj.appendChild(elementListe);
            console.log(responseData);
            elementListe.innerHTML = responseData[key].results;
        }

        

        loadanje.style.display = 'none';

        

    } catch(error){
        alert(error);
    }


}

inputNesto.addEventListener('keyup', dobiPodatke);

