function header(){
	this.creatDom();
}
header.navtemplate=`<nav class="navbar navbar-default">
		  <div class="container-fluid">
		    <!-- Collect the nav links, forms, and other content for toggling -->
		    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
		      <ul class="nav navbar-nav">
		        <li><a href="/index.html" id="font">超市账单管理系统<span class="sr-only">(current)</span></a></li>
		      </ul>
		      <ul class="nav navbar-nav navbar-right loginusers">
		        <li data-toggle="modal" data-target="#loginmodal" id="loginbtn"><a href="/html/loginHtml.html" id="logining">登录</a></li>
		      </ul>
		      <ul class="nav navbar-nav navbar-right hidden welcomeuser">
		        <li><a href="#"></a></li>
		        <li><a href="#">注销</a></li>
		      </ul>
		    </div>
		  </div>
		</nav>`;

header.body=`<div class="alert alert-info" role="alert"></div>
		<div class="leftBox">
			<div class="list-group">
				<a href="#" class="list-group-item disabled"> 功能列表</a>
				<a href="/html/salaryAdmin.html" class="list-group-item active"><img src="/images/zd.png"/>账单管理</a>
				<a href="#" class="list-group-item"><img src="/images/gys.png"/>供应商管理</a>
				<a href="#" class="list-group-item"><img src="/images/yh.png"/>用户管理</a>
				<a href="#" class="list-group-item"><img src="/images/mm.png"/>密码修改</a>
				<a href="#" class="list-group-item"><img src="/images/tc.png"/>退出系统</a>
			</div>
		</div>`;
$.extend(header.prototype,{
	//创建导航dom节点
	creatDom(){
		$(header.navtemplate).appendTo("header");
		$(header.body).appendTo("body");
	}
})
new header();