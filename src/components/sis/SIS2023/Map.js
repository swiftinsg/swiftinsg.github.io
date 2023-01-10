import React from 'react'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = ReactMapboxGl({
  accessToken:
    'pk.eyJ1IjoiaGFyaXNoMjA4IiwiYSI6ImNsOXBvM3loMzBrc3ozdm8wcjh0YTdoangifQ.PQNphWNYR6AZH56qVOSR6g',
  // center:[-74.5, 40]
});

export default function map() {
  return (
    <Map
      center={[103.82835007422801, 1.3236878757192885]}
      zoom={[15]}
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: '50vh',
        width: '100%'
      }}
    >
      <Layer type="circle" id="marker" layout={{ 'icon-image': 'marker-15' }}>
        <Feature coordinates={[1.3170045452637524, 103.76279098452584]} />
      </Layer>
    </Map>
  )
}