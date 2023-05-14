import axios from "../helpers/axios.helpers";


const login = (data: { email: string, password: string }) => {
    return axios.post('/auth/login', data)
}

const sing_Up = (data: {
    first_name: string,
    last_name: string,
    email: string,
    password: string
}) => {
    return axios.post('/auth/sign-up', data)
}

export { login, sing_Up };

