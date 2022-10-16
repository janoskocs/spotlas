import React from 'react'

const LocationImage = ({ spotImage }) => {
    return <div className="rounded location-image-border "><img className="circle-image rounded" src={spotImage.url} alt="Logo of the spot" /></div >
}

export default LocationImage