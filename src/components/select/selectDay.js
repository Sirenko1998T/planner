let days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']
export default function SelectDays() {
   return (
      <div>
         <label>Day:</label>
         <select name='days'>
            {days.map((i) => (
               <option value={i} key={i}>{i}</option>
            ))}
         </select>
      </div>
   )
}