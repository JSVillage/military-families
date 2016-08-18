import axios from 'axios';

const API = "WjXY3BaaOA7QjEbAk2ae99FnLWqQhEkd";


export function getEvents() {
	return axios
			.get("https://api.mlab.com/api/1/databases/militaryresources/collections/eventsDB?apiKey=").concat(API)
			.then(response => response.data)
			.catch(error => {
				throw(error)
			});
}
