import axios from 'axios';

const API = axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL });

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile'))}`;
    }
    return req;     
})

export const signIn = (userData) => API.post(`/user/signin`,userData);
export const getProfile = () => API.get(`/user/profile/fetch`);
export const updateProfile = (userData) => API.patch(`/user/profile/update`,userData)
export const RegisterInSingle = (event) => API.patch(`/register/eventOne`,{eventName : event})
export const RegisterInTeam = ({event,email}) => API.patch(`/register/eventTeam`,{eventName : event, email})
export const fetchEmails = (event) => API.get(`/register/email/fetch?eventName=${event}`)       