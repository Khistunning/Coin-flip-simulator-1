var simNum; 
var numHead; 
var totalSims = 0;
var numTail=0;
$("button").click(function(){
    simNum = 0;
    numHead = 0;
    totalSims++;
//code that changes the span in the HTML
$(".counter").text(totalSims);
//code for storing the value of the user input
while (simNum < 10){
 var flip = Math.floor(Math.random() * 2);  
 if (flip === 1){
     numHead++;
     simNum++;
     numTail++;
     }
 else{
     simNum++;
     }
 
    if(simNum===numHead){
       $("p").text("you were right");
        }
    else{
        $("p").text("you were wrong");
        
        }
}
    
});