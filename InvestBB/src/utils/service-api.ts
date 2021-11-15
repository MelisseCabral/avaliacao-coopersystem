
import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "https://run.mocky.io/v3"
});

export class ApiService {

  static getInvestimentos(): Promise<any> {
    return api.get('/7b2dfe42-37a3-4094-b7ce-8ee4f8012f30')
  }
}
