// Initialize the map
function initMap() {
    const nagpur = [21.1458, 79.0882];
    const map = L.map('map').setView(nagpur, 14);

    // Set up the OpenStreetMap layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Function to find electricians
    function findElectricians() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const userLocation = [position.coords.latitude, position.coords.longitude];
                
                // Set view to user's location
                map.setView(userLocation, 14);
                
                // Add marker for user's location
                const userIcon = L.icon({
                    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
                    iconSize: [25, 41],
                    iconAnchor: [12, 41],
                    popupAnchor: [1, -34],
                    tooltipAnchor: [16, -28],
                    shadowSize: [41, 41]
                });
                
                const userMarker = L.marker(userLocation, { icon: userIcon }).addTo(map);
                userMarker.bindPopup("<b>Your Location</b>").openPopup();
                
                // Electricians' locations with random contact numbers
                const electricians = [
                   
                    { name: 'Electrician ', contact: '987-654-3210', lat: 20.9469, lon:78.9655 },
                    // Add more electricians with random locations and contact numbers
                ];

                // Add markers for electricians' locations with popups
                electricians.forEach(electrician => {
                    const electricianIcon = L.icon({
                        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-red.png',
                        iconSize: [25, 41],
                        iconAnchor: [12, 41],
                        popupAnchor: [1, -34],
                        tooltipAnchor: [16, -28],
                        shadowSize: [41, 41]
                    });

                    const electricianMarker = L.marker([electrician.lat, electrician.lon], { icon: electricianIcon }).addTo(map);
                    electricianMarker.bindPopup(`<b>${electrician.name}</b><br>Contact: ${electrician.contact}`).openPopup();
                });

                // Draw red routes between user and electricians
                electricians.forEach(electrician => {
                    L.Routing.control({
                        waypoints: [
                            L.latLng(userLocation),
                            L.latLng(electrician.lat, electrician.lon)
                        ],
                        lineOptions: {
                            styles: [{ color: 'red', opacity: 0.8, weight: 4 }]
                        }
                    }).addTo(map);
                });
            });
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    }

    // Expose the findElectricians function to the global scope
    window.findElectricians = findElectricians;
}

// Initialize the map on window load
window.onload = initMap;
