import { useNavigate } from "react-router-dom"
export default function Cancel() {
   let navigate = useNavigate();
   return (
      <button className="cancel" onClick={() => navigate('/')}>Cancel</button>
   )
}