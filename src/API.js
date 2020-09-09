import axios from 'axios';

var urlPrefix = 'http://localhost:4020/api'

var API = {
    getUsers : () => {
        return axios.get(urlPrefix+'/users')
    },
    getUser : (id) => {
        return axios.get(urlPrefix+'/users'+id)
    },
    addUser : (id, data) => {
        return axios.post(urlPrefix+'/users'+id,data)
    },
    deleteUser : (id) => {
        return axios.delete(urlPrefix+'/users'+id)
    }

    

}
