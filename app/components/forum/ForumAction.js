import axios from 'axios';

export function getQuestions() {
	return axios
			.get("https://nameless-sands-91761.herokuapp.com/api/forums")
			.then(response => response.data)
			.catch(error => {
				throw(error)
			});
}

export function postQuestion(model) {
	return axios
			.post("https://nameless-sands-91761.herokuapp.com/api/forums", model)
			.then(response => response.data)
			.catch(error => {
				throw(error)
			});
}
