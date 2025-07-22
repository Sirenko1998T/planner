
import Days from "./days"
import TimeSlots from "./timeSlots"
import EmptyCells from "./emptyCells"
import NewEvent from "./button/newEvent"
import Filter from "./select/filter"
import { participants } from "./select/participants"
import { useEffect, useState } from "react"
export default function CalendarLayout() {
   let [data, setData] = useState([]);
   let [filter, setFilter] = useState('All members');
   let selectFilter = (e) => {
      setFilter(e.target.value);
   }
   let filteredAppointments = data.filter((i) => {
      return filter === 'All members' || i.participants === filter;
   })
   useEffect(() => {
      let submitData = localStorage.getItem('submitData');
      if (submitData) {
         let parsed = JSON.parse(submitData);
         setData(Array.isArray(parsed) ? parsed : [parsed]);
      }


   }, [])
   let updateStorage = (newData) => {
      localStorage.setItem("submitData", JSON.stringify(newData));
      setData(newData)
   }
   return (
      <div className="calendar">

         <NewEvent />
         <Filter onChange={selectFilter} />
         <div className="calendar-layout">
            <Days />
            <div className="wrapper-slot">

               <TimeSlots />
               <EmptyCells appointments={filteredAppointments} updateStorage={updateStorage} />

            </div>

         </div>

      </div>
   )
}