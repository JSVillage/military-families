import axios from 'axios';

export function getEvents() {
	return axios
			.get("http://STRONG LOOP API URL/forum")
			.then(response => response.data)
			.catch(error => {
				throw(error)
			});
}
