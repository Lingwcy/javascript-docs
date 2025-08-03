
function reg() {
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var password = document.getElementById("regpsw").value;
	if(name==''){
		alert("学号不能为空")
		return
	}
	if(password==''){
		alert("密码不能为空")
		return	
	}
	if(email==''){
		alert("邮箱不能为空")
		return	
	}
	var xhr =  new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		var LogRes = document.getElementById("regRes");
		if(xhr.readyState == 4 && xhr.status == 200){
				LogRes.innerHTML='';
				var node = document.createElement('div')
				node.textContent ='readyState=' + xhr.readyState + 'status=' +xhr.status;
				node.textContent += xhr.responseText;
				LogRes.appendChild(node)
			
		}
	
	}
	xhr.open("POST","https://localhost:7215/Login/REG?name="+name+"&email="+email+"&psw="+password)
	xhr.send();
	
}