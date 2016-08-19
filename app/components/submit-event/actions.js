import axios from 'axios';

export function postEvent() {
	return axios
			.post("https://nameless-sands-91761.herokuapp.com/api/events")
			.then(response => response.data)
			.catch(error => {
				throw(error)
			});
}
