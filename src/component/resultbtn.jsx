import React , {useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const ResultBtn=({result})=> {
  const [tResult, setTResult] = useState(0);
  useEffect(()=>{
    setTResult(tResult+result);
    },[tResult]);
  return (
    <div className="d-flex justify-content-center">
      <button type="button" className="result-btn">
          <FontAwesomeIcon icon={faCoffee} />
          <span className="p-2 font-weight-bold"> {tResult+result}</span>
      </button>
    </div>
  );
}

export default ResultBtn;
