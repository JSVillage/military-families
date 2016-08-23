import React from 'react';

const FacilityCard = (props) => {
	return <div className="col-md-3">
        	<h4>{props.facility.facilityName}</h4>	
    		<p>{props.facility.address}</p>        	
            <ul>
                {
                    props.facility.programs.map((program, index) => <li key={index}>{program}</li>)
                }
            </ul>
    	</div>	
};

export default FacilityCard;