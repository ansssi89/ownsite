import React, {Component} from 'react';
import {Map, GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';

const mapStyles = {
    width: '85%',
    height: '40%'
};

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

        onClose = props => {
            if(this.state.showingInfoWindow) {
                this.setState({
                    showingInfoWindow: false,
                    activeMarker: null
                });
            }
        };

    render() {
        return (
            <Map
                google={this.props.google}
                zoom={10}
                style={mapStyles}
                initialCenter={{
                    lat: 61.005,
                    lng: 25.64
                }}
                >
                <Marker 
                    onClick={this.onMarkerClick}
                    name={'Anssif'}
                />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        <h4>{this.state.selectedPlace.name}</h4>
                    </div>
                </InfoWindow>
            </Map>
                
            
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCzpMtSdDvGTDYWlhvfod-Jx_5r5CsRiwc'
})(MapContainer);