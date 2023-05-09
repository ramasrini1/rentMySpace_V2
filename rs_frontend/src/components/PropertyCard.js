import React from "react";
import { Link } from "react-router-dom";
import './PropertyCard.css';

/** Show limited information about a property
 *
 * Is rendered by Home and MyListings to show a "card" for each property.
 *
 * Home -> PropertyCard
 * MyListings -> PropertyCard
 */
function PropertyCard({ propertyId, city, zip, cost, imgUrl, propertyType, btnName, btnLink }) {
  

  var myStyle = {
    fontSize: '15px',
    color: 'black'
  }
  return (
    <Link style={myStyle} to={`${btnLink}`}>
    <div className="card">
      <div className="card_body">
        { <img src={imgUrl} alt="house" className="card_image" /> }
        <h6 className="card_title">{city} <span style={myStyle}>{zip}</span></h6>
        <div className="card_description">Property Id: {propertyId} </div>
        <div className="card_description">Rental For: {propertyType} </div>
        <div className="card_description">Rate: ${cost} per hour</div>
      </div>
     
        <button className="card_btn">
          {btnName}
        </button>
     
    </div>
    </Link>
  
  );
}

export default PropertyCard;
