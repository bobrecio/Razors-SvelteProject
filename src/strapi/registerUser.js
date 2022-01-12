import axios from 'axios';
import url from './URL';

async function registerUser({
    email,
    password,
    username
}) {
    console.log(`${url}/api/auth/local/register`);
    const response = await axios
        .post(`${url}/api/auth/local/register`, {
            email,
            password,
            username
        })
        .catch(error => log.error(error));
    if (response) {
        // setup user
    }
    
    return response;
}
export default registerUser