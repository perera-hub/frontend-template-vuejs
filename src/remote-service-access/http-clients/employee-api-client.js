import axios from 'axios'

export const employeeAPIClient = axios.create({
  baseURL: 'http://dummy.restapiexample.com/api/v1/',
  timeout: 2000,
  headers: { 'X-Custom-Header': 'foobar' }
})
