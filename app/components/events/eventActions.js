import axios from 'axios';

export function getEvents() {
	return axios
			.get("https://shrouded-coast-24177.herokuapp.com/api/events")
			.then(response => response.data)
			.catch(error => {
				throw(error)
			});
}
