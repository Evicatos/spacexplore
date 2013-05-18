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
  
  
  set_mode: function(name) {
    $("div[id^='mode_']").addClass("hidden");
    $("#" + name).removeClass("hidden");
  },
  
  keyBindings : {
    // open ship's hold
    105: ["Open Cargo Hold", function() { UI.set_mode("mode_cargo_hold"); }],
    // return to navigation mode
    110: ["Navigational Computer", function() { UI. set_mode("mode_star_system"); }],
    // options
    111: ["Game Options", function() { UI. set_mode("mode_gameOptions"); }],
    
  },
  
  addKeyBindings : function(){
    var kb = "" 
    for (var item in UI.keyBindings){
      if (UI.keyBindings.hasOwnProperty(item)){
        kb = kb + "<tr><td>" + UI.keyBindings[item][0] + "</td><td>" + String.fromCharCode(item) + "</td></tr>";
      }
    }
    $(kb).appendTo("#key_bindings");
   // $("#key_bindings").append($("<tr><td>Hello</td></tr>"));
  },
  
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
    
    UI.addKeyBindings();
  },
  teardown: function() {
    $(currState).unbind("currLocation_change");
    $(currState).unbind("dateTime_change");
    $(currState).unbind("hullIntegrity_change");
    $(currState).unbind("warpCharge_change");
  }  
}

