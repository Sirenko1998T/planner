import { timeSlots } from "../timeSlots";

export default function SelectTimes({ onChange }) {
   return (
      <div>

         <select name='times' onChange={onChange}>
            {timeSlots.map((i) => (
               <option value={i} key={i}>{i}</option>
            ))}
         </select>
      </div>
   )
}