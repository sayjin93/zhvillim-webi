document.addEventListener('DOMContentLoaded', function () {
    // Fetch and parse the JSON data
    fetch('paintings.json')
        .then(response => response.json())
        .then(paintings => {
            // Populate the thumbnail list
            const ul = document.querySelector('ul');
            paintings.forEach(painting => {
                const li = document.createElement('li');
                const img = document.createElement('img');
                img.src = `images/small/${painting.id}.jpg`; // Assuming thumbnail path
                img.dataset.id = painting.id;
                li.appendChild(img);
                ul.appendChild(li);
            });

            // Handle click events on thumbnails
            ul.addEventListener('click', function (event) {
                if (event.target.tagName === 'IMG') {
                    const paintingId = event.target.dataset.id;
                    const painting = paintings.find(p => p.id === paintingId);

                    // Update painting display
                    const fullImg = document.getElementById('full'); // Get the existing img element
                    fullImg.src = `images/large/${painting.id}.jpg`; // Update its src attribute

                    // Update title and artist
                    document.querySelector('h2').textContent = painting.title;
                    document.querySelector('h3').textContent = painting.artist;

                    // Clear any existing feature boxes
                    const boxes = document.querySelectorAll('.box');
                    boxes.forEach(box => box.remove());

                    // Display painting features
                    painting.features.forEach(feature => {
                        const box = document.createElement('div');
                        box.className = 'box';
                        const x = feature.upperLeft[0];
                        const y = feature.upperLeft[1];
                        const width = feature.lowerRight[0] - x;
                        const height = feature.lowerRight[1] - y;
                        box.style.position = 'absolute'; // Ensure your box has a position absolute
                        box.style.left = `${x}px`;
                        box.style.top = `${y}px`;
                        box.style.width = `${width}px`;
                        box.style.height = `${height}px`;
                        // Append the box to the figure or the full image depending on your layout
                        document.querySelector('figure').appendChild(box);
                    
                        // Set up mouseover and mouseout event handlers
                        box.addEventListener('mouseover', function() {
                            // Select the description div by its ID
                            const descriptionDiv = document.getElementById('description');
                            if (descriptionDiv) {
                                descriptionDiv.textContent = feature.description;
                            }
                        });
                    
                        box.addEventListener('mouseout', function() {
                            // Select the description div by its ID and clear its textContent
                            const descriptionDiv = document.getElementById('description');
                            if (descriptionDiv) {
                                descriptionDiv.textContent = '';
                            }
                        });
                    });
                }
            });
        });
});
