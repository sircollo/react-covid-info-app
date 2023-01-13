import React, { useEffect, useState, PureComponent } from "react";
import Logo from "../assets/virus.png";
import { FaSearchLocation } from "react-icons/fa";
import { countries } from "country-data";
import { GiDeathSkull } from "react-icons/gi";
import { CiTempHigh } from "react-icons/ci";
import { BiNotepad } from "react-icons/bi";
import { GiRadioactive } from "react-icons/gi";
import { GrStatusCriticalSmall } from "react-icons/gr";
import { FcDataRecovery } from "react-icons/fc";
import { FaViruses } from "react-icons/fa";
import { FaTemperatureHigh} from "react-icons/fa"
import axios from "axios";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function CovidInfo() {
  const [country, setCountry] = useState();
  const [info, setInfo] = useState();
  const [chartData, setChartData] = useState([])
  const {cases, deaths, population, tests} = chartData;
  
  const options = {
    method: "GET",
    url: `https:ipinfo.io/json?token=a3477223ca0a15`,
  };
  
  const apiOptions = {
    method: "GET",
    url: "https://covid-193.p.rapidapi.com/statistics",
    params: { country },
    headers: {
      "X-RapidAPI-Key": `${process.env.REACT_APP_RAPID_API_KEY}`,
      "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
    },
  };
  function fetchCovidInfo(e) {
    e.preventDefault();
    axios
      .request(apiOptions)
      .then(function (response) {
        // console.log(response);
        setInfo(response.data.response);
        const data = response.data.response[0]
        setChartData(response.data.response[0])
        console.log(response.data.response[0]);
        return data
        
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  async function getInitialCountry(e){
    e.preventDefault(e)
    if(navigator.geolocation){
      axios.request(options).then(async function(response){   
        const country_code = response.data.country
        // setCountry(countries[`${country_code}`].name)
      }).catch(function (error) {
        console.error(error);
      })
    }
   
  }
  
  useEffect(() => {
    (async () => {
      let res = await getInitialCountry();
      if (res) {
      }
    })();
  });
  const data = [
      {
        // name: "Cases",
        // new_cases: cases.new,
        // recovered: cases.recovered,
        // active: cases.active,
        // total_cases: cases.total,
        // new_deaths: deaths.new,
        // total_deaths: deaths.total,
        // tests: deaths.total,
  
      },
  
      
    ];
   

  
  return (
    <div className="bg-custom h-screen">
      <header className="sticky top-0 z-50 flex flex-wrap justify-between items-center py-2 px-3 max-w-6xl mx-auto">
        <div className="cursor-pointer flex items-center">
          <img src={Logo} alt="" className="object-contain w-12" />
          <p className="px-2 text-white font-medium">Covid information</p>
        </div>
        <div className="w-3/5">
          <form className="flex items-center">
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
              <input
                onChange={(e) => setCountry(e.target.value)}
                type="text"
                id="country-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-custom focus:border-custom block w-full pl-10 p-2  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-custom dark:focus:border-custom"
                placeholder="Search Country"
                required
              />
            </div>
            <button
              onClick={fetchCovidInfo}
              type="submit"
              className="p-2.5 ml-2 text-sm font-medium text-white bg-custom rounded-lg border border-#205-700 hover:bg-custom focus:ring-4 focus:outline-none focus:ring-custom dark:bg-custom dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <FaSearchLocation />
              <span className="sr-only">Search</span>
            </button>
          </form>
        </div>
      </header>
      {info && (
        <div className="w-full flex justify-between flex-wrap whitespace-nowrap mx-auto items-center max-w-6xl mt-6">
          <div className="">
            <div className="flex justify-evenly items-center space-x-8 flex-wrap whitespace-nowrap">
              <p className="text-3xl text-white">
                {info[0].continent}/{info[0].country}
              </p>
              <span className="text-xl italic text-white">
                <span className="text-[#50d71e] space-x-2">Population: </span>
                {info[0].population}
              </span>
            </div>
            <div className="mt-4">
              <p className="w-full text-3xl text-white">Cases</p>
              <table className="text-white mx-auto">
                <thead>
                  <tr className="">
                    <th className="w-full"></th>
                    <th className="w-full">No.</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="flex items-center space-x-3 py-2">
                      <BiNotepad className="text-2xl mr-2 text-red-400" />
                      New Cases
                    </td>
                    <td>{info[0].cases.new}</td>
                  </tr>
                  <tr>
                    <td className="flex items-center space-x-3 py-2">
                      <GiRadioactive className="text-2xl mr-2 text-red-400" />
                      Active Cases
                    </td>
                    <td>{info[0].cases.active}</td>
                  </tr>
                  <tr>
                    <td className="flex items-center space-x-3 py-2">
                      <GrStatusCriticalSmall className="text-2xl mr-2 text-red-400" />
                      Critical
                    </td>
                    <td>{info[0].cases.critical}</td>
                  </tr>
                  <tr>
                    <td className="flex items-center space-x-3 py-2">
                      <FcDataRecovery className="text-2xl mr-2 text-red-400" />
                      Recovered
                    </td>
                    <td>{info[0].cases.recovered}</td>
                  </tr>
                  <tr>
                    <td className="flex items-center space-x-3 py-2">
                      <GiDeathSkull className="text-2xl mr-2 text-red-400" />
                      Deaths (new)
                    </td>
                    <td>{info[0].deaths.new}</td>
                  </tr>
                  <tr>
                    <td className="flex items-center space-x-3 py-2">
                      <FaViruses className="text-2xl mr-2 text-red-400" />
                      Total Cases
                    </td>
                    <td>{info[0].cases.total}</td>
                  </tr>
                  <tr>
                    <td className="flex items-center space-x-3 py-2">
                      <GiDeathSkull className="text-2xl mr-2 text-red-400" />
                      Total deaths
                    </td>
                    <td>{info[0].deaths.total}</td>
                  </tr>
                  <tr>
                    <td className="flex items-center space-x-3 py-2">
                      <FaTemperatureHigh className="text-2xl mr-2 text-red-400" />
                      Total tests
                    </td>
                    <td>{info[0].tests.total}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="">
            <p className="text-3xl text-white">Graph Information</p>
            {chartData && (
              <BarChart
              // width=
              // height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            className="w-full">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="new_cases" fill="#8884d8" />
              <Bar dataKey="recovered" fill="#82ca9d" />
              <Bar dataKey="active" fill="#82ca9d" />
              <Bar dataKey="new_deaths" fill="#82ca9d" />
              <Bar dataKey="total_deaths" fill="#82ca9d" />
              <Bar dataKey="tests" fill="#82ca9d" />
            </BarChart>
            )}
            
          </div>
        </div>
      )}
      {info && (
        <div className="max-w-6xl mx-auto mt-12 flex flex-col">
          <p className="italic text-white text-sm">Date: {info[0].time}</p>
        </div>
      )}
    </div>
  );
}
