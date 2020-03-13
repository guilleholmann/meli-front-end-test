import React from 'react';
import './styles.scss';
import spinnerImg from '../../assets/images/spinner.svg'

const Spinner = () => 
    <div className="spinner">
        <img src={spinnerImg} />
    </div>

export default Spinner;