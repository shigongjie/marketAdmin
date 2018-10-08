const userDao=require("../dao/user_dao.js");

const userService={
	login(req,res,next){
		const {username}=req.query;
		userDao.find({username})
			.then((data)=>{
				if(data.length===1){
					const user=data[0];
//					req.session.user=user;
					res.json({res_code:1,res_error:"",res_body:{data:{username}}});
				}else {
					  			res.json({res_code:0, res_error:"", res_body:{}});
					  		}
				
			})
			.catch((err)=>{
				res.json({res_code:0,res_error:"",res_body:{}});
			})
	}
}
module.exports=userService;