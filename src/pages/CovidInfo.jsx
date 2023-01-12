import React from 'react'
import Logo from "../assets/virus.png"
import { FaSearchLocation } from "react-icons/fa"
export default function CovidInfo() {

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
                              <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
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
          
    </div>
  )
}
