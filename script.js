


  // Bird data
const birds = {
  swan: {
    img: 'https://climateadaptationexplorer.org/static/e557c1bf5c86a0bb83ee2ac959bd9956/6d13b/226.jpg',
    description: 'The Purple Swamphen is known for its beautiful and vibrant plumage. '
  },
  hen: {
    img: 'https://media.istockphoto.com/id/1930591987/photo/a-red-hen.jpg?s=612x612&w=0&k=20&c=HcldYV0GztxlnO8qMHi2QQf5hoGQCNx5QNvAHtGWhgc=',
    description: 'The Red Hen is a common bird known for its bright red feathers and its role in farms and rural areas.'
  },
  parrot: {
    img: 'https://media.istockphoto.com/id/500404999/photo/yellow-naped-parrot-isolated-on-white.jpg?s=612x612&w=0&k=20&c=E2R1az_4rIVb_p3FpUaFj3UnQX8-6IHaMS8XcQkV1SM=',
    description: 'The Green Parrot is a colorful bird with a distinctive green plumage and a lively personality.'
  },
  eagle: {
    img: 'https://raptor.umn.edu/sites/raptor.umn.edu/files/2024-04/Golden%20Eagle%20RoMW.png',
    description: 'The Golden Eagle is a large bird of prey with stunning golden feathers and exceptional hunting skills.'
  },
  sparrow: {
    img: 'https://www.shutterstock.com/image-photo/side-view-small-brown-sparrow-600nw-2258702937.jpg',
    description: 'The Brown Sparrow is a small bird known for its adaptability and cheerful chirping.'
  },
  owl: {
    img: 'https://t4.ftcdn.net/jpg/05/84/67/93/360_F_584679341_S3AY9JP9xzqFDUDGjQ54VcP3JraGSsPv.jpg',
    description: 'The Snowy Owl is an impressive bird with striking white feathers and excellent night vision.'
  }
};

// Function to display bird info
function displayBird(birdName) {
  const bird = birds[birdName];
  if (bird) {
    document.getElementById('bird-img').src = bird.img;
    document.getElementById('bird-description').textContent = bird.description;
    document.getElementById('bird-display').style.display = 'block';
  }
}

// Event listeners for bird buttons
document.querySelectorAll('.bird-button').forEach(button => {
  button.addEventListener('click', function() {
    displayBird(this.dataset.bird);
  });
});

// Function to toggle theme
document.getElementById('theme-toggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-theme');
  document.querySelectorAll('.bird-button').forEach(button => {
    button.classList.toggle('dark-theme');
  });
  document.getElementById('bird-img').classList.toggle('dark-theme');
});
document.getElementById('search-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission
  const query = document.getElementById('search-input').value;
  alert('Search for: ' + query);
});