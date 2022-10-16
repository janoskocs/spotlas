import React from 'react'

const LocationImage = ({ spotImage }) => {
    return <div className=" max-w-[20%] rounded location-image-border"><img src={spotImage.url} alt="Logo of the spot" /></div >
}

export default LocationImage