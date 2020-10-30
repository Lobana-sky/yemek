import React , {useState,useEffect} from 'react';
import { Icon } from '@iconify/react';
import whatsappIcon from '@iconify/icons-fa/whatsapp';
import '../App.css';

const ResultBtn=({result})=> {
  
  const [tResult, setTResult] = useState(result);
  useEffect(()=>{
    setTResult(result);
    },[result]);

  return (
    <div className="d-flex justify-content-center">
      <button type="button" className="result-btn">
      <Icon icon={whatsappIcon} width="40px" height="45px" />
      <span className="text-btn-result"> {tResult.toPrecision(4)} &#8378;</span>
      </button>
    </div>
  );
}


export default ResultBtn;
