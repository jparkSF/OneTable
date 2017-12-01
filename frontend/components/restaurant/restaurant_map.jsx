import React from 'react';

export default class RestaurantMap extends React.Component {
  constructor(props) {
    super(props);
    console.log('in props');
    console.log(props);
    this.restaurantLng = props.position.restaurantLng.bind(this);
    this.restaurantLat = props.position.restaurantLat.bind(this);
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
     

        this.route_map.setCenter({
          lat: mapOptions.center.lat,
          lng: mapOptions.center.lng
        });

        this.route_map.setZoom(14);
      console.log('inside maps');
      console.log(this.restaurantLat);
      console.log(this.restaurantLng);
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
