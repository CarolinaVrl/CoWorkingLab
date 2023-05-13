import axios from "../helpers/axios.helpers";


const login = (data: { email: string, password: string }) => {
    return axios.post('/auth/login', data)
}

const sing_Up = (data: {
    email: string,
    password: string
}) => {
    return axios.post('/auth/sign-up', data)
}

const fort_Password = (data: {
    email: string,
}) => {
    return axios.post('/auth/forget-password', data)
}

const change_Password = (data: {
    password: string
}) => {
    return axios.post('/auth/change-password', data)
}

export { login, sing_Up, fort_Password, change_Password };

