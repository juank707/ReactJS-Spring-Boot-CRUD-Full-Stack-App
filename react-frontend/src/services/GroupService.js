import axios from "axios";
const API_BASE_URL = "http://localhost:8081/api/";

class GroupService {

    getAllGroups(){
        return axios.get(API_BASE_URL + '/groups' );
    }
    getGroupById(groupId){
        return axios.get(API_BASE_URL + '/groups/'  + groupId);
    } 
    createGroup(userId){
        return axios.get(API_BASE_URL + '/users/'  + userId + '/groups');
    }
    updateGroup(userId, groupId){
        return axios.get(API_BASE_URL + '/users/' + userId + '/groups/' + groupId );
    }
    deleteGroup(userId, groupId){
        return axios.get(API_BASE_URL + '/users' + userId + '/groups/' + groupId );
    }
}   
export default new GroupService()