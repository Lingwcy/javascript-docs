
function login() {
	var eno = document.getElementById("eno").value;
	var password = document.getElementById("logpsw").value;
	if(eno==''){
		alert("学号不能为空")
		return
	}
	if(password==''){
		alert("密码不能为空")
		return
	}
	var xhr =  new XMLHttpRequest();
	xhr.onreadystatechange = function(){
		var LogRes = document.getElementById("logRes");
		if(xhr.readyState == 4 && xhr.status == 200){
				LogRes.innerHTML='';
				var node = document.createElement('div')
				node.textContent ='readyState=' + xhr.readyState + 'status=' +xhr.status;
				node.textContent += xhr.responseText;
				LogRes.appendChild(node)
			
		}
	
	}
	xhr.open("POST","https://localhost:7215/Login/LG?eno="+eno+"&psw="+password)
	xhr.send();
	
}