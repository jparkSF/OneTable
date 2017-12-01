import React from 'react';

export default class RestaurantMap extends React.Component {
  constructor(props) {
    super(props);
    this.restaurantLng = props.position.restaurantLng;
    this.restaurantLat = props.position.restaurantLat;
  }

  componentDidMount() {
    const restaurant = {
      // San Francisco coordinates
      center: {
        lat: this.restaurantLat,
        lng: this.restaurantLng
      },
      zoom: 18
    };



    const mapElement = this.refs.map;
    this.route_map = new google.maps.Map(mapElement, restaurant);


    if (navigator.geolocation) {
     

        // this.route_map.setCenter({
        //   lat: restaurant.center.lat,
        //   lng: restaurant.center.lng
        // });

    
        const marker = new google.maps.Marker({
          position: {
            lat: this.restaurantLat,
            lng: this.restaurantLng
          },
          map: this.route_map,

     
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
