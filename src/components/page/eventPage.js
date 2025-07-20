import NameEvent from "../input/eventName"
import Participants from "../select/participants"
import SelectDays from "../select/selectDay"
import SelectTimes from "../select/selectTime"
import Cancel from "../button/cancel"
import Create from "../button/create"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function EventPage() {
   let navigate = useNavigate();
   let [nameEvent, setNameEvent] = useState('');
   let [participants, setParticipants] = useState(null);
   let [selectDays, setselectDays] = useState(null);
   let [selectTimes, setselectTimes] = useState(null);
   let [cancel, setcancel] = useState(false)

   return (
      <div className='event-page'>
         <form>
            <label> Name off the event:</label>
            <NameEvent value={nameEvent} onChange={(e) => setNameEvent(e.target.value)} />
         </form>
         <label>Participants:</label>
         <Participants onChange={(e) => setParticipants(e.target.value)} />
         <label>Day:</label>
         <SelectDays onChange={(e) => setselectDays(e.target.value)} />
         <label>Time:</label>
         <SelectTimes onChange={(e) => setselectTimes(e.target.value)} />
         <Cancel onClick={() => {

            let submitData = {
               nameEvent: nameEvent,
               participants: participants,
               selectDays: selectDays,
               selectTimes: selectTimes,
            }
            let savedData = JSON.parse(localStorage.getItem('submitData'));
            if (!Array.isArray(savedData)) {
               savedData = [];
            }
            savedData.push(submitData);
            localStorage.setItem('submitData', JSON.stringify(savedData))
            setcancel(!cancel);

            navigate('/')
         }} />

         <Create />
      </div>
   )
}