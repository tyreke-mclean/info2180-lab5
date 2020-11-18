document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("searchBtn").addEventListener('click',(event) => {
        event.preventDefault();
        
        if (window.XMLHttpRequest) {
            xmlhttpreq=new XMLHttpRequest();
          } else { 
            xmlhttpreq=new ActiveXObject("Microsoft.XMLHTTP");
          }
          xmlhttpreq.onreadystatechange=function() { 
            if (this.readyState==4 && this.status==200) {
              
               //document.getElementById("result").innerHTML=this.responseText;
               alert(this.responseText); 
            }
          }
          
          xmlhttpreq.open("GET","http://localhost:8080/world.php?q="+(document.getElementById("search box").value),true);
          xmlhttpreq.send();

    });
    
    
    
}, false);