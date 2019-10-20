import React from 'react';
import './station.styles.css';

export const Station = (props) => (
    <div className='station-container'>
        <img alt='radio-canada-logo' src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Ybk08GZIzGqLt0zhgWK2uYZo3Ehc6kK1tYy323pqr7FiAmoy`}/>
        <h2>{props.station.name}</h2>
        <p>{props.station.address}</p>
    </div>
)

export default Station;