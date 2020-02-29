import { AppConfig } from "../../../configs";
import axios from "axios";

export class JsonPlaceholderApi {
    private static API_BASE_URL = "https://jsonplaceholder.typicode.com";
    private static MOCK_API_BASE_URL = AppConfig.mockApiDomain.jsonPlaceholder;

    static getTodoList() {
        if (AppConfig.useMockResponse) {
            return axios.get(`${JsonPlaceholderApi.MOCK_API_BASE_URL}/todos`).then(console.log);
           
        } else {
            return axios.get(`${JsonPlaceholderApi.API_BASE_URL}/todos`).then(console.log)   
        }
    }
}