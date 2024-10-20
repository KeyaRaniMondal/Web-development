import { useEffect, useState } from "react";
import CountryInformation from "../CountryInfo/CountryInformation";
import './country.css'

const Country=()=>{
    const[country,setCountry]=useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountry(data))
    },[])
    return(
        <div>
        <h4>Country:{country.length}</h4>
        {
            // key is used when more data is reloaded
            country.map(country=><CountryInformation country={country} key={country.cca3}></CountryInformation>)
        }
        </div>
    )
}
export default Country;