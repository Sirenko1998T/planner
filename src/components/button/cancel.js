
import { useNavigate } from "react-router-dom"
export default function Cancel({ onClick }) {
   let navigate = useNavigate();
   return (
      <button onClick={onClick}>Cancel</button>
   )

}
//  onClick={() => navigate('/')}