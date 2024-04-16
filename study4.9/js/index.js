if(window.innerWidth > 500) {
    var toLogin = document.getElementById('toLogin');
    var toRegister = document.getElementById('toRegister');
    var form_box = document.getElementsByClassName('form-box')[0];
    var register_box = document.getElementsByClassName('register-box')[0];
    var login_box = document.getElementsByClassName('login-box')[0];
    toRegister.addEventListener('click',()=>{
        form_box.setAttribute('style','transform:translateX(100.5%);transition: 0.5s ease-in-out;');
        login_box.classList.add('hidden');
        register_box.classList.remove('hidden');
        document.getElementById('logUN').value = "";
        document.getElementById('logPW').value = "";
        document.getElementById('regUN').value = "";
        document.getElementById('regPW').value = "";
    })
    toLogin.addEventListener('click',()=>{
        form_box.setAttribute('style','transform:translateX(0%);transition: 0.5s ease-in-out;');
        register_box.classList.add('hidden');
        login_box.classList.remove('hidden');
        document.getElementById('logUN').value = "";
        document.getElementById('logPW').value = "";
        document.getElementById('regUN').value = "";
        document.getElementById('regPW').value = "";
    })
    function log(){
        let logUN = document.getElementById('logUN').value;
        let logPW = document.getElementById('logPW').value;
        if(logUN === "" && logPW === ""){
            alert("请输入用户名或密码！");
        } else {
            if(logUN in localStorage){
                let password = localStorage[logUN];
                if(logPW === password){
                    alert("登录成功！");
                    document.getElementById('logUN').value = "";
                    document.getElementById('logPW').value = "";
                } else {
                    alert("账号或密码错误！");
                }
            } else {
                alert("用户不存在，请先注册！");
                document.getElementById('logUN').value = "";
                document.getElementById('logPW').value = "";
            }
        }
    } 
    function reg(){
        let username = document.getElementById('regUN').value;
        let password = document.getElementById('regPW').value;
        if(username === "" && password === ""){
            alert("请输入用户名或密码！");
        } else {
            if(username in localStorage){
                alert("用户已存在！");
                document.getElementById('regUN').value = "";
                document.getElementById('regPW').value = "";
                form_box.style.transform='translateX(100.5%)';
                login_box.classList.add('hidden');
                register_box.classList.remove('hidden');
            } else {
                localStorage.setItem(username,password);
                alert("注册成功！！");
                form_box.style.transform='translateX(0%)';
                register_box.classList.add('hidden');
                login_box.classList.remove('hidden');
            }
        }
    }
}else{
    var toLogin = document.getElementById('toLoginp');
    var toRegister = document.getElementById('toRegisterp');
    var form_box = document.getElementsByClassName('form-box')[0];
    var register_box = document.getElementsByClassName('register-box')[0];
    var login_box = document.getElementsByClassName('login-box')[0];
    toRegister.addEventListener('click',()=>{
        login_box.classList.add('hidden');
        register_box.classList.remove('hidden');
        document.getElementById('logUN').value = "";
        document.getElementById('logPW').value = "";
        document.getElementById('regUN').value = "";
        document.getElementById('regPW').value = "";
    })
    toLogin.addEventListener('click',()=>{
        register_box.classList.add('hidden');
        login_box.classList.remove('hidden');
        document.getElementById('logUN').value = "";
        document.getElementById('logPW').value = "";
        document.getElementById('regUN').value = "";
        document.getElementById('regPW').value = "";
    })
    function log(){
        let logUN = document.getElementById('logUN').value;
        let logPW = document.getElementById('logPW').value;
        if(logUN === "" && logPW === ""){
            alert("请输入用户名或密码！");
        } else {
            if(logUN in localStorage){
                let password = localStorage[logUN];
                if(logPW === password){
                    alert("登录成功！");
                    document.getElementById('logUN').value = "";
                    document.getElementById('logPW').value = "";
                } else {
                    alert("账号或密码错误！");
                }
            } else {
                alert("用户不存在，请先注册！");
                document.getElementById('logUN').value = "";
                document.getElementById('logPW').value = "";
            }
        }
    } 
    function reg(){
        let username = document.getElementById('regUN').value;
        let password = document.getElementById('regPW').value;
        if(username === "" && password === ""){
            alert("请输入用户名或密码！");
        } else {
            if(username in localStorage){
                alert("用户已存在！");
                document.getElementById('regUN').value = "";
                document.getElementById('regPW').value = "";
                login_box.classList.add('hidden');
                register_box.classList.remove('hidden');
            } else {
                localStorage.setItem(username,password);
                alert("注册成功！！");
                register_box.classList.add('hidden');
                login_box.classList.remove('hidden');
            }
        }
    }
}