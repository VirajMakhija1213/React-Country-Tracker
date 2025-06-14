import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard'
import CountriesListShimmer from './CountriesListShimmer'
import { data } from '../countriesData' 
export default function CountriesList({ query }) {
  const [countriesData, setCountriesData] = useState([])

  useEffect(() => {
    setCountriesData(data)
  }, [])

  if (!countriesData.length) {
    return <CountriesListShimmer />
  }

  return (
    <div className="countries-container">
      {countriesData
        .filter((country) =>
          country.name.common.toLowerCase().includes(query.toLowerCase()) ||
          country.region.toLowerCase().includes(query.toLowerCase())
        )
        .map((country) => (
          <CountryCard
            key={country.name.common}
            name={country.name.common}
            flag={country.flags.svg}
            population={country.population}
            region={country.region}
            capital={country.capital?.[0]}
            data={country}
          />
        ))}
    </div>
  )
}
