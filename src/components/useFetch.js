//Custom hook to fetch data

import { useState, useEffect } from 'react'

import React from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error('Sorry, could not get the data from this resource.')
                }
                return response.json()
            }).then((data) => {
                setData(data)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [url])

    return data

}

export default useFetch