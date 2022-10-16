import React from 'react'

const LocationType = ({ spotType }) => {
    return <p className="white-text drop-shadow opacity-80">{spotType[0].name}</p>
}

export default LocationType