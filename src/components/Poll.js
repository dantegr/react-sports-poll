import React from 'react';
import 'flag-icon-css/css/flag-icon.css'

const Poll = ({sport , name , awayName , homeName, country}) => {


    function flagConverter(country){
        if (country === "ENGLAND"){
            return "flag-icon-"
        }
    }
    return(
        <div className="poll">
            <span class="flag-icon flag-icon-gr"></span>
            <h1>Sports Poll</h1>
            <p>Sport:{sport}</p>
            <p> {name}</p>
    
            <p>Who will win?</p>
    
            
            <form>
                <input type="radio" name="result" value={homeName} />{homeName}
                <input type="radio" name="result" value="Draw" />Draw
                <input type="radio" name="result" value={awayName} />{awayName}
            </form>
        
            <button onClick={() => window.location.reload(false)}>Next Event</button>
    
        </div>
    );

}

export default Poll;