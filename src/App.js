import React, { useState } from 'react';
import Calendar from 'react-calendar';
import moment from 'moment'

const App = () => {

  const [date, setdate] = useState(new Date());
  const Onchange=date=>setdate(date)
// console.log(moment(date).format("MMM Do YY") )
// console.log(moment(date).format("ddd Do YY") )
// console.log(moment(date).add(1,'days').format("ddd Do YY"))
// console.log(moment(date).add(7,'days').format("ddd Do YY"))



  return (
    <>
      <div className='cantainer'>
        <div className='main-cantainer'>

          <div className='date-cantainer'>
            <div><p className='date-year'>{moment(date).format("ddd, Do YY") }</p></div>

            <div className='today-date'>
              <div className='innerClass'><p className='paraClass'>Today</p></div>
              <div className='innerClass'><p className='paraClass'>{moment(date).format("MMM Do YY")}</p></div>
            </div>
            {/* {marginBottom:"20px"} */}
            <div className='Tomorrow'>
              <div className='Tomorrowinner'><p className='paraClass'>Tomorrow</p></div>
              <div className='Tomorrowinner'><p className='paraClass'>{moment(date).add(1,'days').format("ddd Do YY")}</p></div>
            </div>

            <div className='Next-week'>
              <div className='next-weekinnerClass'><p className='paraClass'>Next-week</p></div>
              <div className='next-weekinnerClass'><p className='paraClass'>{moment(date).add(7,'days').format("ddd Do YY")}</p></div>
            </div>

            {/* <div className='No-Date'>
              <div style={{ marginLeft: "20px", marginRight: "20px", marginTop: "40px" }}><p className='paraClass'>No Date</p></div>
              <div style={{ marginLeft: "20px", marginRight: "20px", marginTop: "40px" }}> <h1 className='paraClass'>-</h1></div>
            </div> */}
          </div>
          <div className='calender-cantainer'>
            <div className='calender'>
              <Calendar
                onChange={Onchange}
                value={date}
                className='calendar-react'
                
              />
            </div>
          </div>
        </div>
      </div>

    </>)
};

export default App;