import axios from "axios";

const INSTRUCTOR = "appgym";
const API_URL = "http://localhost:8090";
const INSTRUCTOR_API_URL = `${API_URL}/api/cliente`;

class CourseDataService {
    retrieveAllCourses() {
        return axios.get(`${API_URL}/api/cliente`);
    }

    deleteCourse(name, idCli) {
        return axios.delete(`${API_URL}/api/cliente/${idCli}`);

    }

    retrieveCourse(name, idCli) {
        return axios.get(`${API_URL}/api/cliente/${idCli}`);
    }

    updateCourse(name, idCli, course) {
        return axios.put(`${API_URL}/api/cliente/${idCli}`, course);
    }

    createCourse(name, course) {
        return axios.post(`${API_URL}/api/cliente/`, course);
    }
    
}



export default new CourseDataService();