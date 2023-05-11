import axios from "../helpers/axios.helpers";


const login = (data: { email: string; passuord: string }) => {
    return axios.post('/auth/login', data)
}

const sing_up = (data: { email: string; passuord: string }) => {
    return axios.post('/auth/sign-up', data)
}

export { login, sing_up };

