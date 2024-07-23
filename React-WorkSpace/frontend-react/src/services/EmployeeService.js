import axios from 'axios';

	const EMPLOYEE_API_BASE_URL="http://localhost:9191/api/v1/employees";

	class EmployeeService{

 	   	getEmployees()
		{
        	return axios.get(EMPLOYEE_API_BASE_URL);
        }

		createEmployee(employee)
		{
			return axios.post(EMPLOYEE_API_BASE_URL,employee);
		}

		getEmployeeById(employeeid)
		{
			return axios.get(EMPLOYEE_API_BASE_URL+'/'+employeeid);
		}

		updateEmployee(employeeid,employee)
		{
			return axios.put(EMPLOYEE_API_BASE_URL+'/'+employeeid,employee);
		}
		deleteEmployee(employeeid)
		{
			return axios.delete(EMPLOYEE_API_BASE_URL+'/'+employeeid);
		}
	}
	export default new EmployeeService();
