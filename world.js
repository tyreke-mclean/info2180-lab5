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
              
               
            }
          }
          
          xmlhttpreq.open("GET","http://localhost:80443/world.php?q="+(document.getElementById("search box").value),true);
          xmlhttpreq.send();

    });
    
    
    
}, false);