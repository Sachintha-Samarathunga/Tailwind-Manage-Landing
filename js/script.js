const btn = document.getElementById('menu-btn');
const nav = document.getElementById('menu');
const submit = document.getElementById('submit');

btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    nav.classList.toggle('hidden');
})

function validateEmail()  
{  
	var x=document.myform.email.value;  
	var atposition=x.indexOf("@");  
	var dotposition=x.lastIndexOf(".");

	if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){ 
		document.getElementById("error").innerHTML=  "<p>Whoops, make sure it's an email</p>";
		return false;   
	}  
} 