const {User}=require("./modules.js");
const UserDao={
	save(userinfo){
		return new User(userinfo).save();
	},
	update(condition,userinfo){
		
	},
	remove(condition){
		
	},
	find(condition){
		return User.find(condition);
	}
};

module.exports=UserDao;