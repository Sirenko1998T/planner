
import Days from "./days"
import TimeSlots from "./timeSlots"
import EmptyCells from "./emptyCells"
import NewEvent from "./button/newEvent"
import { useEffect, useState } from "react"
export default function CalendarLayout() {
   let [nameEvent, setNameEvent] = useState('');
   let [participants, setParticipants] = useState('');
   let [selectDays, setselectDays] = useState('');
   let [selectTimes, setselectTimes] = useState('');
   useEffect(() => {
      let storageNameEvent = localStorage.getItem('nameEvent');
      let storagepParticipants = localStorage.getItem('participants');
      let storageSelectDays = localStorage.getItem('selectDays');
      let storageSelectTimes = localStorage.getItem('selectTimes');
      storageNameEvent && setNameEvent(storageNameEvent);
      storagepParticipants && setParticipants(storagepParticipants);
      storageSelectDays && setselectDays(storageSelectDays);
      storageSelectTimes && setselectTimes(storageSelectTimes);
   }, [])
   return (
      <div className="calendar">
         <NewEvent />
         <div className="calendar-layout">
            <Days />
            <div className="wrapper-slot">

               <TimeSlots />
               <EmptyCells />

            </div>

         </div>

      </div>
   )
}