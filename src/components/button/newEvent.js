import { useNavigate } from "react-router-dom"
export default function NewEvent() {
   let navigate = useNavigate();
   return (
      <button onClick={() => navigate('/src/components/page/eventPage.js')}>New Event +</button>
   )

}