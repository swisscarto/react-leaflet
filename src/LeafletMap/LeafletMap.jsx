import React, { Component } from 'react'
import './LeafletMap.css'
import * as L from 'leaflet'
import 'leaflet/dist/leaflet.css'


class LeafletMap extends Component {

  /*
   * Constructor: called when the map is instantiated.
   * Gets all the properties from the parent component.
   */
  constructor(props){
    super(props)

    this.createViz = this.createViz.bind(this)
    this.updateViz = this.updateViz.bind(this)
  }

  /*
   * Called when the component has been created in the DOM.
   * We use this to create our map.
   */
  componentDidMount(){
    this.createViz()
    this.updateViz()
  }

  /*
   * Called when the props have been changed
   */
  componentDidUpdate(){
    this.updateViz()
  }

  createViz(){
    this.map = L.map('map', {
      center: [47, 8],
      maxBounds: [[45, 5], [49, 11]],
      minZoom: 4,
      maxZoom: 12,
      zoom: 6
    })
    this.baselayer = L.tileLayer(
      'http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }
    )
    this.baselayer.addTo(this.map)
  }

  updateViz(){
    // Just now we don't do anything here.
  }

  render(){
    return (
      <div id="map"></div>
    )
  }
}

export default LeafletMap
