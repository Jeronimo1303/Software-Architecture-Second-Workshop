async function getRandomPokenea() {
    fetch('/random').then(
        response => response.json()).then(
            data => {
                console.log(data);
                // Update individual HTML elements
                document.getElementById('pokenea-name').textContent = data.name;
                document.getElementById('pokenea-id').textContent = data.id;
                document.getElementById('pokenea-ability').textContent = data.ability;
                document.getElementById('pokenea-phrase').textContent = data.phrase;
                document.getElementById('container-id').textContent = data.container_id;
            }
        ).catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('output').className = 'error';
            document.getElementById('pokenea-name').textContent = 'Error: ' + error.message;
        }
    );
}