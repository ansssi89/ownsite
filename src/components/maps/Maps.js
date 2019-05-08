import React, {Component} from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '100%'
};

export class MapContainer extends Component {
    render() {
        return (
            <Map 
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={{
                    lat: 61.0059208,
                    lng: 25.6395485
                }}
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCzpMtSdDvGTDYWlhvfod-Jx_5r5CsRiwc'
})(MapContainer);