import React , {useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser ,faEnvelope, faKey} from '@fortawesome/free-solid-svg-icons';

import '../App.css';

const ResultBtn=({result})=> {
  const [tResult, setTResult] = useState(0);
  useEffect(()=>{
    setTResult(result);
    },[result]);
  return (
    <div className="d-flex justify-content-center">
      <button type="button" className="result-btn">
          <FontAwesomeIcon icon={faEnvelope} />
          <span className="p-2 font-weight-bold"> {result}</span>
      </button>
    </div>
  );
}

export default ResultBtn;
