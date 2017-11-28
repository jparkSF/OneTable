import React from 'react';

class Map extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    const mapOptions = {
      // San Francisco coordinates
      center: {
        lat: 37.787956,
        lng: -122.407515
      },
      zoom: 12
    };

    

    const mapElement = this.refs.map;
    this.route_map = new google.maps.Map(mapElement, mapOptions);


    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        
        this.route_map.setCenter({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });   

        this.route_map.setZoom(18);
        
        const marker = new google.maps.Marker({
          position: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          },
          map: this.route_map,
          
        });      
      });


    } else {
      // TODO: Maybe turn this into an error message or remove entirely
      console.log("Geolocation is not supported by this browser.");
    }
  }

  render() {
    return (
      <div className="map" ref="map" ></div>
    );
  }
}

export default Map;