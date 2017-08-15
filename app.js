'use strict';

$(document).ready( () => {
  console.log('jQuery is ready for manipulations with DOM');
  $('div.example button').on('click',(e)=>
  {console.log("44555");
      if(e.target.id==='example1'){doSomeshing1();}
      if(e.target.id==='example2'){doSomeshing2();}
      if(e.target.id==='example3'){doSomeshing3();}
      if(e.target.id==='example4'){doSomeshing4();}
      
  });
  
});
$('div.example input').on('change',(e)=>
{
    
    if(e.target.id==='toggle-modal'){doSomeshing5();}
});







function doSomeshing1()
{
    console.log("1");
     
      $('.example1 span').each(function()
      { 
          
        $(this).css('color','red');  
      });
  
}
function doSomeshing2()
{
    console.log("2");
 
     
      $('.example2 p.special').each(function()
      { 
          
        $(this).css({ color: 'blue',fontsize:'18px' });  
      });
  
  }
function doSomeshing3()
{
    console.log("3");
 
     
      $('.example.example3 ul li').each(function()
      { console.log("44555");
          
        $(this).css({color:'green',backgrouncolor:"blue",fontsize:'20px'});  
      });
  
  }

function doSomeshing4()
{
    console.log("4");

      let templ='';
     
         templ+='<p>00010002 </p>';
        
       
     
     $("#container-for-append").append(templ);
  
  }
  function doSomeshing5()
  {
          
      let checker=$('#toggle-modal'),modal=$('#modal-window');
     if( checker.prop('checked'))
     {
         modal.show(100);
         modal.find('button').on('click',(e)=>
         {
             modal.hide(100);
              checker.prop('checked',false);
         });
     }     
  }


window.onload = () => {
  console.log('Document loaded');
};