import React, {useEffect , useState } from 'react'
import { FaCircle } from "react-icons/fa";
import "./covid.css"
const Covid = () => {

  const [data,setData] = useState([]);

  const getCovidData = async () => {

    try{
      const res = await fetch('https://data.covid19india.org/data.json');
      const actualData = await res.json();
      console.log(actualData.statewise[0]);
      setData(actualData.statewise[0]);
    } catch (err) {
      console.log(err);
    }

  }

  useEffect(()=>{
      getCovidData();
  }, []);

  return (
    <>
        <section>
            <div className="live">
                <div className="right">
                   <FaCircle/>
                  <h2>LIVE</h2> 
                </div>  
            </div>

            <div className="hero">
                    <div className="s1">
                          <p>OUR COUNTRY</p>
                          <h3>INDIA</h3>
                    </div>
                    <div className="s1">
                          <p>RECOVERED</p>
                          <h3>{data.recovered}</h3>
                    </div>
                    <div className="s1">
                          <p>CONFIRMED</p>
                          <h3>{data.confirmed}</h3>
                    </div>
                    <div className="s1">
                          <p>DEATHS</p>
                          <h3>{data.deaths}</h3>
                    </div>
                    <div className="s1">
                          <p>ACTIVE</p>
                          <h3>{data.active}</h3>
                    </div>
                    <div className="s1">
                          <p>UPDATED</p>
                          <h3>{data.lastupdatedtime}</h3>
                    </div>
                    
            </div>


        </section>

        <footer>
        <p>© <span>SatyajitDutta</span> 2022. built using <span>React.js</span> <br /> <a href="https://github.com/Sdalpha">github/Sdalpha</a>    </p> 
        </footer>
    </>
  )
}

export default Covid
