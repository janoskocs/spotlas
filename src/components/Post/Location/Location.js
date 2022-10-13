import React from 'react'
import LocationImage from './LocationImage'
import LocationName from './LocationName'
import LocationType from './LocationType'

const Location = ({ spot }) => {
    return (
        <>
            <LocationImage spotImage={spot.logo} />
            <LocationName spotName={spot.name} />
            <LocationType spotType={spot.types} />
        </>
    )
}

export default Location