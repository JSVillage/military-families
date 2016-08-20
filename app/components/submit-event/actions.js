import axios from 'axios';

export function postEvent(model) {
	return axios
			.post("https://nameless-sands-91761.herokuapp.com/api/events", model)
			.then(response => response)
			.catch(error => {
				throw(error)
			});
}
