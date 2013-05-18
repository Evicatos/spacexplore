/**
 * @author Tom
 */


var currState = {
  setDateTime : function(val){
    this.dateTime = val;
    $(currState).trigger("dateTime_change");
  },
  setLocation : function(val){
    this.location = val;
    $(currState).trigger("location_change");
  },
  setHullIntegrity : function(val){
    this.hullIntegrity = val;
    $(currState).trigger("hullIntegrity_change");
  },
  setWarpCharge : function(val){
    this.warpCharge = val;
    $(currState).trigger("warpCharge_change");
  },
  dateTime: "123456", 
  location: "ab123",
  hullIntegrity: 25,
  warpCharge: 25
  
}

var UI = {
  
  setup: function() {
    $("#currDateTime").text(currState.dateTime);    
    $("#currLocation").text(currState.location);
    
    // bind all the things!
    $(currState).bind("dateTime_change", function (event){
      $("#currDateTime").text(currState.dateTime);  
    });
    
    $(currState).bind("currLocation_change", function (event){
      $("#currLocation").text(currState.location);  
    });
    
    var meterUpdater = function(newValue, name){
      if ((this.CurrValue != newValue) && (newValue <= 100))
      {
        $("#" + name).css('width', String(newValue) + "%");
        if (newValue < 25) {
          $("#" + name).css('background','red');
        }
        else if (newValue < 50){
          $("#" + name).css('background','orange');
        }
        else if (newValue < 75){
          $("#" + name).css('background','yellow');
        }
        else {
          $("#" + name).css('background','lime');
        }
        this.CurrValue = newValue;
      }
    }
    
    $(currState).bind("hullIntegrity_change", function (event){
      meterUpdater(currState.hullIntegrity, "hullIntegrity")
    });
    
    $(currState).bind("warpCharge_change", function (event){
      meterUpdater(currState.warpCharge, "warpCharge")
    });
  },
  teardown: function() {
    $(currState).unbind("currLocation_change");
    $(currState).unbind("dateTime_change");
    $(currState).unbind("hullIntegrity_change");
    $(currState).unbind("warpCharge_change");
  }  
}

