let participants = ['Dmitriy', 'Lisa', 'Oleg', 'Andriy']
export default function Participants() {
   return (
      <div>
         <label>Participants:</label>
         <select name='participants'>
            {participants.map((i) => (
               <option value={i} key={i}>{i}</option>
            ))}
         </select>
      </div>
   )
}