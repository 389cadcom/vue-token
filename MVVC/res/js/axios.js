var instance = axios({
	
})

//TODO 响应拦截
instance.interceptors.request.use( 
	req =>{
	
	},
	error => {
})


//TODO 请求拦截
instance.interceptors.response.use(
	data => {
		return response;
	},
	error => {
		var config = error.config
	}
)


