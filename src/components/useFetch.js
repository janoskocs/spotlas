//Custom hook to fetch data

import { useState, useEffect } from 'react'

import React from 'react'

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error('Sorry, could not get the data from this resource.')
                }
                return response.json()
            }).then((data) => {
                setData(data)
                setLoaded(true)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [url])

    return { data, loaded }

}

export default useFetch