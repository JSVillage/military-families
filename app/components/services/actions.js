import axios from 'axios';

export function getServices() {
    return axios
            .get('http://localhost:8080/app/components/services/services.json')
            .then(response => response.data)
            .catch(error => {
                throw(error);
            });
}