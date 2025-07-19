import { timeSlots } from "../timeSlots";

export default function SelectTimes() {
   return (
      <div>
         <label>Time:</label>
         <select name='times'>
            {days.map((i) => (
               <option value={i} key={i}>{i}</option>
            ))}
         </select>
      </div>
   )
}