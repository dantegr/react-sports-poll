import React from 'react';
import 'flag-icon-css/css/flag-icon.css'


const Poll = ({sport , name , awayName , homeName, country, group, state}) => {


    function flagConverter(country){
        if (country === "ENGLAND"){
            return "flag-icon flag-icon-gb";
        }else if (country === "FRANCE"){
            return "flag-icon flag-icon-fr"
        }else if (country === "SWEDEN"){
            return "flag-icon flag-icon-se"
        }else {
            console.log(country)
            return null
            
        }

    }
    return(
        
        <div className="poll">
            <div className="poll-header">
            <h1 className="poll-header__title">{sport}</h1>
            <div className="poll-header__flag"><span className={flagConverter(country)}></span></div>
                
            </div>
            <div className="poll-content">
            <h2> {name}</h2>
    
            <p>Group: {group}</p>

            <p>Status: {state}</p>
    
            </div>
            <div className="container">
            <form>
                <div class="radio-group">
                <input type="radio" id="option-one" name="selector"/><label for="option-one">{homeName}</label>
                <input type="radio" id="option-two" name="selector"/><label for="option-two">Draw</label>
                <input type="radio" id="option-three" name="selector"/><label for="option-three">{awayName}</label>
                </div>
            </form>
            </div>
            
            <div class="button_cont" align="center">
                <button className="poll-button" onClick={() => window.location.reload(false)}>Next Event</button>
            </div>
    
        </div>
         
    );

}

export default Poll;