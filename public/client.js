async function getRandomPokenea() {
  try {
    const response = await fetch('/random');
    const data = await response.json();

    console.log(data);

    // Hide image section, show pokenea section
    document.getElementById('image-section').style.display = 'none';
    document.getElementById('pokenea-section').style.display = 'block';

    // Update text fields
    document.getElementById('pokenea-name').textContent = data.name;
    document.getElementById('pokenea-id').textContent = data.id;
    document.getElementById('pokenea-ability').textContent = data.ability;
    document.getElementById('pokenea-height').textContent = data.height;
    document.getElementById('pokenea-phrase').textContent = data.phrase;
    document.getElementById('container-id').textContent = data.container_id;

  } catch (error) {
    console.error('Error fetching data:', error);
    document.getElementById('pokenea-name').textContent = 'Error: ' + error.message;
  }
}

async function getPokeneaImage() {
  try {
    const response = await fetch('/image');
    const data = await response.json();

    console.log(data);

    // Hide pokenea section, show image section
    document.getElementById('pokenea-section').style.display = 'none';
    document.getElementById('image-section').style.display = 'block';

    // Update image and text
    document.getElementById('pokenea-image').src = data.image;
    document.getElementById('image-phrase').textContent = data.phrase;
    document.getElementById('image-container-id').textContent = data.container_id;

  } catch (error) {
    console.error('Error fetching data:', error);
    document.getElementById('image-phrase').textContent = 'Error: ' + error.message;
  }
}
