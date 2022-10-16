import LocationImage from './LocationImage'
import LocationName from './LocationName'
import LocationType from './LocationType'

const Location = ({ spot }) => {
    return (
        <div className="flex items-center location-component">

            <LocationImage spotImage={spot.logo} />

            <div className="flex flex-col justify-centerml-2 md:ml-3 l:ml-4 text-2xl drop-shadow">
                <LocationName spotName={spot.name} />
                <LocationType spotType={spot.types} />
            </div>

        </div >


    )
}

export default Location