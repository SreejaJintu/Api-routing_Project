import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CountryCards from './CountryCards';
import './Countries.css' 
//import { useNavigate } from 'react-router-dom';
 


function Countries() {
  //const navigate=useNavigate()
    const [CData,setCData]=useState([]);
    
    async function  fetchData(){

try{  
   const response= await axios.get('https://restcountries.com/v3.1/all')
   setCData(response.data)

   }
   catch(err){
//navigate('/')
    console.log(err);

   }
    // setCData()
    }

    useEffect(()=>{
      fetchData()
      },[])
    return (
    <div className='CountriesBox'>
        {CData.map((country,index)=><CountryCards country={country} key={index}/>)}
        
    </div>
  )
}

export default Countries