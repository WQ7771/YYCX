function checkLogin(){
	var account = document.querySelector('#account').value;
	var password = document.querySelector('#password').value;
	if(!account) {
		alert('请输入账号');
		return false;
	}else if(!password){
		alert('请输入密码');
		return false;
	}else {
		alert('提交成功');
		window.location.href = 'index.html';
		return false;
	}
}