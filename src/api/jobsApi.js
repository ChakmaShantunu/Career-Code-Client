import axios from "axios";

export const myPostedJobsPromise = async (email) => {
    try {
        const response = await axios.get('http://localhost:3000/jobs', {
            params: { email: email }
        });
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error
    }
}

export const deleteJob = async (id) => {
    try {
        const response = await axios.delete(`http://localhost:3000/jobs/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error
    }
}