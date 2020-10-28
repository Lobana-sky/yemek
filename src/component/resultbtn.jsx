import React from 'react';
// import {Row,Container,Col,Image} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

function ResultBtn({result}) {
  return (
    <div className="d-flex justify-content-center">
      <button type="button" className="result-btn" onClick={console.log("lobana")}>
          <FontAwesomeIcon icon={faCoffee} />
          <span className="p-2 font-weight-bold">${result}</span>
      </button>
    </div>
  );
}

export default ResultBtn;
