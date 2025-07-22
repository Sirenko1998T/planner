import { timeSlots } from "../timeSlots";

export default function SelectTimes({ onChange }) {
   return (
      <div>

         <select className="select-times" name='times' onChange={onChange}>
            {timeSlots.map((i) => (
               <option className='times-option' value={i} key={i}>{i}</option>
            ))}
         </select>
      </div>
   )
}