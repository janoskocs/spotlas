import LocationImage from './LocationImage'
import LocationName from './LocationName'
import LocationType from './LocationType'

const Location = ({ spot }) => {
    return (
        <div className="flex items-center location-component">

            <LocationImage spotImage={spot.logo} />

            <div className="flex flex-col justify-center">
                <LocationName spotName={spot.name} />
                <LocationType spotType={spot.types} />
            </div>

        </div>


    )
}

export default Location