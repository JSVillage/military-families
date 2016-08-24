import React from 'react';

const FacilityCard = (props) => {
	return <div className="col-md-3">
		<div className="panel panel-info">
			<div className="panel-heading">
	        	<h3>{props.facility.facilityName}</h3>	
	    		<p>{props.facility.address}</p>    
    		</div>  
            <ul className="list-group">
                {
                    props.facility.programs.map((program, index) => <li className="list-group-item services-list" key={index} dangerouslySetInnerHTML={{__html: program}}></li>)
                }
            </ul>
        </div>
    </div>	
};

export default FacilityCard;