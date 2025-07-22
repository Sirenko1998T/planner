let participants = [{ name: 'Dmitriy' }, { name: 'Andriy' }, { name: 'Lisa' }, { name: 'Oleg' }];
export { participants }
export default function Participants({ onChange }) {
   return (
      <div>

         <select name='participants' onChange={onChange}>
            {participants.map((i) => (
               <option value={i.name} key={i.name} >{i.name}</option>
            ))}
         </select>
      </div>
   )
}