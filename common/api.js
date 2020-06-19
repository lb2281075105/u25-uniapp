// const BASE_URL = 'http://app.u17.com/v3/appV3_3/ios/phone'
const BASE_URL = ''

export const request = (options) => {
    
	return new Promise((resolve,reject)=>{
		uni.request({
			url: BASE_URL + options.url,
			method: options.method || 'GET',
			// header:{"content-type":"application/x-www-form-urlencoded"},
			dataType:"json",
			data: options.data || {},
			success: (response)=>{
				resolve(response);
			},
			fail: (error)=>{
				reject(error);
			}
		})
	});

}