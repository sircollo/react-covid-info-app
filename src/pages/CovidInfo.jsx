import React, {useEffect, useState} from 'react'
import Logo from "../assets/virus.png"
import { FaSearchLocation } from "react-icons/fa"
import { countries } from 'country-data'
import axios from "axios"
export default function CovidInfo() {
    const [country, setCountry] = useState("");

    const options = {
        method: 'GET',
        url: `https:ipinfo.io/json?token=a3477223ca0a15`,
    }
    useEffect(() => {
        if(navigator.geolocation){
            axios.request(options).then(function (response){
                const country_code = (response.data.country)
                setCountry(countries[`${country_code}`].name)
            }).catch(function (error){
                console.log(error)
                setCountry("Kenya")
            });
        }
      });
    
  return (
    <div className='bg-custom h-full'>
          <header className='sticky top-0 z-50 flex flex-wrap justify-between items-center py-2 px-3 max-w-6xl mx-auto'>
              <div className='cursor-pointer flex items-center'>
                  <img src={Logo} alt="" className='object-contain w-12'/>
                  <p className='px-2 text-white font-medium'>Covid information</p>
              </div>
              <div className='w-3/5'>

                  <form className="flex items-center">
                      <div className="relative w-full">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                              
                          </div>
                          <input type="text" id="country-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-custom focus:border-custom block w-full pl-10 p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-custom dark:focus:border-custom" placeholder="Search Country" required />
                      </div>
                      <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-custom rounded-lg border border-#205-700 hover:bg-custom focus:ring-4 focus:outline-none focus:ring-custom dark:bg-custom dark:hover:bg-blue-700 dark:focus:ring-blue-800">                          
                            <FaSearchLocation/>
                          <span className="sr-only">Search</span>
                      </button>
                  </form>

              </div>
          </header>
          <div className='w-full flex justify-between flex-wrap whitespace-nowrap mx-auto items-center max-w-6xl mt-6'>
            <div className=''>
                <p className='text-3xl text-white'>{country}'s Covid Information</p>
                <div>
                    
                </div>
            </div>
            <div className=''>
                <p className='text-3xl text-white'>Country Information</p>
            </div>
          </div>
    </div>
  )
}
