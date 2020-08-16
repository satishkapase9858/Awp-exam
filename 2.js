function fun1()
{      
      
     let username=document.querySelector("#username").value;
     let password=document.querySelector("#password").value;
     
     let c=document.createElement("div");
     let c1=document.createElement("div");
      c.style.background="red"
       c.innerHTML=username;
        c1.innerHTML=password;
      let d=document.querySelector("#commenthere");
      d.appendChild(c);
      d.appendChild(c1);      
       
}