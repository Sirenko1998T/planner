import { useNavigate } from "react-router-dom"
export default function Create() {
   let navigate = useNavigate();
   return (
      <button onClick={() => navigate('/')}>Create</button>
   )
}