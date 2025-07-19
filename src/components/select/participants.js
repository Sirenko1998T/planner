let participants = ['Dmitriy', 'Lisa', 'Oleg', 'Andriy']
export default function Participants({ onChange }) {
   return (
      <div>

         <select name='participants' onChange={onChange}>
            {participants.map((i) => (
               <option value={i} key={i} >{i}</option>
            ))}
         </select>
      </div>
   )
}