function showDiv() 
{

  var x = document.getElementById("sub-cat");  
  if (x.style.visibility === "hidden")
   {

    x.style.visibility = "visible";
    x.style.opacity= 1;
    x.style.height="200px";
    x.style.transition= " 3s"
   
   } 

  else 
  {
    x.style.visibility = "hidden";
    x.style.opacity= 0;
    x.style.height="0px";
    x.style.transition="2s";
    
  }
}


var mt=document.getElementById('Men-tshirt');
var bd=document.getElementById('best-deal-shop');
var mj=document.getElementById('Men-Jeans');
var msh=document.getElementById('Men-Shoes');
var ms=document.getElementById('Men-Shorts');
var wt=document.getElementById('Women-tshirt');
var wj=document.getElementById('Women-Jeans');
var ws=document.getElementById('Women-Skirt');
var wsh=document.getElementById('Women-Shoes');





var divs=[mt,bd,mj,msh,ms,wt,wj,ws,wsh];

function showproduct(m)
{

  for (i=0;i<divs.length;i++)
  {

      if(m==divs[i].id)
      {

        var x=divs[i];
        x.style.display="block";
      
      }

      else
      {
        divs[i].style.display="none";
      }
  }


}
