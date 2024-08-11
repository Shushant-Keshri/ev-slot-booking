// script.js
document.getElementById('bookSlot').addEventListener('click', function() {
    // Get selected area and slot
    var area = document.getElementById('areaSelect').value;
    var slot = document.getElementById('slotSelect').value;
    var time = document.getElementById('timeselect').value;


    // Update the booking information
    document.getElementById('areaSelected').textContent = 'Area Selected: ' + area;
    document.getElementById('slotBooked').textContent = 'Slot Booked: ' + slot;
    document.getElementById('timebooked').textContent = 'time Booked: ' + time;


    // Optionally, disable the booked slot or show a message
    // Example: document.getElementById('slotSelect').disabled = true;
    updateMap(area);
});
function updateMap(area) {
    var mapElement = document.getElementById('map');

    // Example coordinates for each area
    var locations = {
        "Cinema Hall": { lat: 40.730610, lng: -73.935242 }, // Example coordinates for New York
        "School": { lat: 34.052235, lng: -118.243683 }, // Example coordinates for Los Angeles
        "Office": { lat: 37.773972, lng: -122.431297 } // Example coordinates for San Francisco
    };

    var selectedLocation = locations[area];

    // // Generate Google Maps embed URL
    // var mapUrl = `https://www.google.com/maps/embed/v1/view?key=YOUR_API_KEY&center=${selectedLocation.lat},${selectedLocation.lng}&zoom=15`;

    // // Set the map iframe src
    // mapElement.innerHTML = `<iframe
    //     width="100%"
    //     height="300"
    //     frameborder="0"
    //     style="border:0"
    //     src="${mapUrl}"
    //     allowfullscreen>
    // </iframe>`;
// }
if (window.map) {
    window.map.remove();
}

// Initialize the map
window.map = L.map(mapElement).setView(selectedLocation, 13);

// Add the tile layer (OpenStreetMap in this case)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(window.map);

// Add a marker at the selected location
L.marker(selectedLocation).addTo(window.map)
    .bindPopup(`<b>${area}</b>`)
    .openPopup();
}