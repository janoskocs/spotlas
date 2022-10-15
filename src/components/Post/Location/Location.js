import React, { Component } from 'react'
import LocationImage from './LocationImage'
import LocationName from './LocationName'
import LocationType from './LocationType'

const Location = ({ spot }) => {
    return (
        <div className="location-component">
            <LocationImage spotImage={spot.logo} />
            <LocationName spotName={spot.name} />
            <LocationType spotType={spot.types} />
        </div>


    )
}

export default Location