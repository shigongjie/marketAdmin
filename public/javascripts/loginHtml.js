function loginHtml(){
	this.logining();
}
$.extend(loginHtml.prototype,{
	
	logining(){
		$("#turn").on("click",()=>{
			const data=$("#userForm").serialize();
			$.get("/api/users/loginuser",data,(data)=>{
				if(data.res_code===1){
					//登录成功 将用户信息保存到session storage
					sessionStorage.User=JSON.stringify(data.res_body.data);
					window.location.href = "/index.html";
				}
			})
//			window.location.href = "/index.html";
			
		})
	}
})

new loginHtml();
