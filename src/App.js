import './App.css';
import {useNavigate} from 'react-router-dom'
function App() {
  const navigate=useNavigate();
  const handleClick=()=>{
    navigate('/2')
  }
  return (
    <div className="App">
     <h2>Documents</h2>
      <ul>
        <li onClick={handleClick}>sample document1.pdf</li>
        <li onClick={handleClick}>sample document2.pdf</li>
        <li onClick={handleClick}>sample document3.pdf</li>

        </ul>  
    </div>
  );
}

export default App;
