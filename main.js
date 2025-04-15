var a=0;
var won=0;
var xmarker11=0;
var xmarker12=0;
var xmarker13=0;
var xmarker21=0;
var xmarker22=0;
var xmarker23=0;
var xmarker31=0;
var xmarker32=0;
var xmarker33=0;

var omarker11=0;
var omarker12=0;
var omarker13=0;
var omarker21=0;
var omarker22=0;
var omarker23=0;
var omarker31=0;
var omarker32=0;
var omarker33=0;

var xwon=0;
var owon=0;
var drawCount=0;



function displayMarker(coords) {
  
  if (a % 2==1){
    if (window["x"+coords]==0 && won!=1){
    document.querySelector("."+ coords).textContent="x";
    window["x"+coords]=1;
    window["o"+coords]=-1;
    a=a+1;
      if(won!=1){
        document.querySelector("." + coords
          ).style.opacity="1"
  }
    if (xmarker11+xmarker12+xmarker13==3 || xmarker21+xmarker22+xmarker23==3 || xmarker31+xmarker32+xmarker33==3 || xmarker11+xmarker21+xmarker31==3 || xmarker12+xmarker22+xmarker32==3|| xmarker13+xmarker23+xmarker33==3 || xmarker11+xmarker22+xmarker33==3 || xmarker13+xmarker22+xmarker31==3){
      document.querySelector('.winningmsg').textContent="x wins !!"
      document.querySelector('.winningmsg').style.opacity="1"
      won=1;
      xwon=xwon+1;
      document.querySelector('.CscoreX').textContent=xwon;
        }
      if (xmarker11+xmarker12+xmarker13==3){
        document.querySelector('.marker11').style.color="red"
        document.querySelector('.marker12').style.color="red"
        document.querySelector('.marker13').style.color="red"
          }
          
     if (xmarker21+xmarker22+xmarker23==3){
        document.querySelector('.marker21').style.color="red"
        document.querySelector('.marker22').style.color="red"
        document.querySelector('.marker23').style.color="red"
          }   
          
     if (xmarker31 + xmarker32 + xmarker33 == 3) {
       document.querySelector('.marker31').style.color = "red"
       document.querySelector('.marker32').style.color = "red"
      document.querySelector('.marker33').style.color = "red"
     }
     
     if (xmarker11+xmarker21+xmarker31==3){
        document.querySelector('.marker11').style.color="red"
        document.querySelector('.marker21').style.color="red"
        document.querySelector('.marker31').style.color="red"
          }  
          
      if (xmarker12+xmarker22+xmarker32==3){
        document.querySelector('.marker12').style.color="red"
        document.querySelector('.marker22').style.color="red"
        document.querySelector('.marker32').style.color="red"
          }   
      if (xmarker13+xmarker23+xmarker33==3){
        document.querySelector('.marker13').style.color="red"
        document.querySelector('.marker23').style.color="red"
        document.querySelector('.marker33').style.color="red"
          }
      if (xmarker11+xmarker22+xmarker33==3){
        document.querySelector('.marker11').style.color="red"
        document.querySelector('.marker22').style.color="red"
        document.querySelector('.marker33').style.color="red"
          }
      if (xmarker13+xmarker22+xmarker31==3){
        document.querySelector('.marker13').style.color="red"
        document.querySelector('.marker22').style.color="red"
        document.querySelector('.marker31').style.color="red"
          }
      
     
     
          
      
    }
 
  } else {
    if (window["o"+coords]==0 && won!=1) {
    document.querySelector("."+ coords).textContent="o";
    window["o"+coords]=1;
    window["x"+coords]=-1;
    a=a+1;
    if(won!=1){
       document.querySelector("." + coords).style.opacity="1"
  }
    }
        if (omarker11+omarker12+omarker13==3 || omarker21+omarker22+omarker23==3 || omarker31+omarker32+omarker33==3 || omarker11+omarker21+omarker31==3 || omarker12+omarker22+omarker32==3|| omarker13+omarker23+omarker33==3 || omarker11+omarker22+omarker33==3 || omarker13+omarker22+omarker31==3){
       document.querySelector('.winningmsg').textContent="o wins !!"   
      document.querySelector('.winningmsg').style.opacity="1"
      won=1;
      owon=owon+1;
      document.querySelector('.CscoreO').textContent=owon;
        }
        
        if (omarker11+omarker12+omarker13==3){
        document.querySelector('.marker11').style.color="red"
        document.querySelector('.marker12').style.color="red"
        document.querySelector('.marker13').style.color="red"
          }
          
     if (omarker21+omarker22+omarker23==3){
        document.querySelector('.marker21').style.color="red"
        document.querySelector('.marker22').style.color="red"
        document.querySelector('.marker23').style.color="red"
          }   
          
     if (omarker31 + omarker32 + omarker33 == 3) {
       document.querySelector('.marker31').style.color = "red"
       document.querySelector('.marker32').style.color = "red"
      document.querySelector('.marker33').style.color = "red"
     }
     
     if (omarker11+omarker21+omarker31==3){
        document.querySelector('.marker11').style.color="red"
        document.querySelector('.marker21').style.color="red"
        document.querySelector('.marker31').style.color="red"
          }  
          
      if (omarker12+omarker22+omarker32==3){
        document.querySelector('.marker12').style.color="red"
        document.querySelector('.marker22').style.color="red"
        document.querySelector('.marker32').style.color="red"
          }   
      if (omarker13+omarker23+omarker33==3){
        document.querySelector('.marker13').style.color="red"
        document.querySelector('.marker23').style.color="red"
        document.querySelector('.marker33').style.color="red"
          }
      if (omarker11+omarker22+omarker33==3){
        document.querySelector('.marker11').style.color="red"
        document.querySelector('.marker22').style.color="red"
        document.querySelector('.marker33').style.color="red"
          }
      if (omarker13+omarker22+omarker31==3){
        document.querySelector('.marker13').style.color="red"
        document.querySelector('.marker22').style.color="red"
        document.querySelector('.marker31').style.color="red"
          }
  }
  

  
  if (a==9 && won!=1){
    document.querySelector('.winningmsg').textContent="It's a draw !!"
    document.querySelector('.winningmsg').style.opacity="1"
    drawCount=drawCount+1;
    document.querySelector('.CscoreDraw').textContent=drawCount;
        
  }

}

function restartPage() {
   const elements= document.querySelectorAll('[class^="marker"]')
    
    elements.forEach(el => { el.style.opacity="0"; });
    elements.forEach(el => { el.style.color="black"; });
    
    
    document.querySelector('.winningmsg').style.opacity="0";
    
     a=0;
     won=0;
     xmarker11=0;
     
 xmarker12=0;
 xmarker13=0;
 xmarker21=0;
 xmarker22=0;
 xmarker23=0;
 xmarker31=0;
 xmarker32=0;
 xmarker33=0;

 omarker11=0;
 omarker12=0;
 omarker13=0;
 omarker21=0;
 omarker22=0;
 omarker23=0;
 omarker31=0;
 omarker32=0;
 omarker33=0;
 }
 
 
 function hover(coords) {
    if (won != 1) { // Check if game already won
        if (a % 2 == 1 && window["x" + coords] == 0) {
            // It's player X's turn
            document.querySelector("." + coords).textContent = "x";
            document.querySelector("." + coords).style.opacity = "0.2";
        } else if (a % 2 == 0 && window["o" + coords] == 0) {
            // It's player O's turn
            document.querySelector("." + coords).textContent = "o";
            document.querySelector("." + coords).style.opacity = "0.2";
        }
    }
}
 
 function endhover(coords){
   if (window["o"+coords]==0){
   document.querySelector("." + coords).style.opacity = "0";
   }
 }