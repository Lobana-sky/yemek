import React , {useState,useEffect} from 'react';
import { Icon, InlineIcon } from '@iconify/react';
import whatsappIcon from '@iconify/icons-fa/whatsapp';

import '../App.css';

const ResultBtn=({result})=> {
  const [tResult, setTResult] = useState(0);
  useEffect(()=>{
    setTResult(result);
    },[result]);
  return (
    <div className="d-flex justify-content-center">
      <button type="button" className="result-btn">
      <Icon icon={whatsappIcon} width="45px" height="45px" />
      <span className="text-btn-result"> {result.toPrecision(4)} &#8378;</span>
      </button>
    </div>
  );
}


export default ResultBtn;
