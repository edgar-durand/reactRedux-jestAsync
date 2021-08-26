// This is you api url
import axios from 'axios';


const API_URL = `http://localhost:3333/api/`;

const config = () => ({
    headers: { 'Content-Type': 'application/json' },
})

const http = {
    /**
     * 
     * @param {string} endpoint 
     * @returns {Promise}
     */
    get: async (endpoint) => {
        try {
            return (await axios.get(`${API_URL}${endpoint}`)).data;
        } catch (error) {
            return { error }
        }

    },
    post: async (endpoint, body) => {
        try {
            return (await axios.post(`${API_URL}${endpoint}`, body, config())).data;
        } catch (error) {
            return { error }
        }
    },
    patch: async (endpoint, body) => {
        try {
            return (await axios.patch(`${API_URL}${endpoint}`, body, config())).data;
        } catch (error) {
            return { error }
        }
    },
    delete: async (endpoint) => {
        try {
            return (await axios.delete(`${API_URL}${endpoint}`)).data;
        } catch (error) {
            return { error }
        }
    }
};

export default http