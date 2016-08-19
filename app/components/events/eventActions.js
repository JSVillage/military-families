import axios from 'axios';

export function getEvents() {
	return axios
			.get("https://nameless-sands-91761.herokuapp.com/api/events")
			.then(response => response.data)
			.catch(error => {
				throw(error)
			});
}
