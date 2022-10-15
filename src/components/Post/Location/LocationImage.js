import React from 'react'

const LocationImage = ({ spotImage }) => {
    return <img className="w-1/12" src={spotImage.url} alt="Logo of the spot" />
}

export default LocationImage