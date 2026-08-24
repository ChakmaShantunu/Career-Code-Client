import axios from "axios";

export const myApplicationsPromise = async (email) => {
    try {
        const response = await axios.get('http://localhost:3000/applications', {
            params: { email: email }
        });
        return response.data;
    } catch (error) {
        console.error('Error:', error);
        throw error
    }
}

// export const alreadyApplied = async (email) => {
//     try {
//         const response = await axios.get('http://localhost:3000/applications', {
//             params: { email: email }
//         });
//         return response.data;
//     } catch (error) {
//         console.error('Error:', error);
//         throw error
//     }
// }