



$(document).on("click", "#myButton", function(e) {
    
    
  bootbox.prompt({ 
  size: "medium",
  title: "What is your name?", 
  
  callback: function(result) { 
      /* result = String containing user input if OK clicked or null if Cancel clicked */ 
      alert(result);
      }
      
  });   
   
    
    
});





