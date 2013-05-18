
function handle_document_ready() {
  UI.setup();
  
  setInterval(function(){
    if (currState.hullIntegrity >= 100){
      currState.hullIntegrity = 0;
    } else {
     currState.setHullIntegrity(currState.hullIntegrity + 10);
    }
  }, 2000)

}

$( document ).ready(handle_document_ready());