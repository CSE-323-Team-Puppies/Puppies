jQuery("#simulation")
  .on("click", ".s-ab0323e5-fec3-45dd-9736-cf449b3336e7 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Rectangle_3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "action": "jimCount",
                  "parameter": [ {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "Users",
                      "value": {
                        "action": "jimAnd",
                        "parameter": [ {
                          "action": "jimEquals",
                          "parameter": [ {
                            "field": "Login_name"
                          },{
                            "datatype": "property",
                            "target": "#s-User_name_input",
                            "property": "jimGetValue"
                          } ]
                        },{
                          "action": "jimEquals",
                          "parameter": [ {
                            "field": "Password"
                          },{
                            "datatype": "property",
                            "target": "#s-password_input",
                            "property": "jimGetValue"
                          } ]
                        } ]
                      }
                    }
                  } ]
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "action": "jimCount",
                  "parameter": [ {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "Users",
                      "value": {
                        "action": "jimAnd",
                        "parameter": [ {
                          "action": "jimEquals",
                          "parameter": [ {
                            "field": "Login_name"
                          },{
                            "datatype": "property",
                            "target": "#s-User_name_input",
                            "property": "jimGetValue"
                          } ]
                        },{
                          "action": "jimEquals",
                          "parameter": [ {
                            "field": "Password"
                          },{
                            "datatype": "property",
                            "target": "#s-password_input",
                            "property": "jimGetValue"
                          } ]
                        } ]
                      }
                    }
                  } ]
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-button")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/8c5c4ab1-f9d2-4070-9682-da2a6ed5193f",
                    "transition": {
                      "type": "turn",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("keyup.jim", ".s-ab0323e5-fec3-45dd-9736-cf449b3336e7 .keyup", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-User_name_input")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.which === 9 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimFocusOn",
                  "parameter": {
                    "target": [ "#s-password_input" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      if(!jimUtil.isAndroidDevice() || data.which != 229)
      	jEvent.launchCases(cases);
      if(data.which === 9) {
        return false;
      }
    } else if(jFirer.is("#s-password_input")) {
      cases = [
        {
          "blocks": [
            {
              "condition": (data.which === 13 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false) && {
                "action": "jimEquals",
                "parameter": [ {
                  "action": "jimCount",
                  "parameter": [ {
                    "action": "jimFilterData",
                    "parameter": {
                      "datatype": "datamaster",
                      "datamaster": "Users",
                      "value": {
                        "action": "jimAnd",
                        "parameter": [ {
                          "action": "jimEquals",
                          "parameter": [ {
                            "field": "Login_name"
                          },{
                            "datatype": "property",
                            "target": "#s-User_name_input",
                            "property": "jimGetValue"
                          } ]
                        },{
                          "action": "jimEquals",
                          "parameter": [ {
                            "field": "Password"
                          },{
                            "datatype": "property",
                            "target": "#s-password_input",
                            "property": "jimGetValue"
                          } ]
                        } ]
                      }
                    }
                  } ]
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      if(!jimUtil.isAndroidDevice() || data.which != 229)
      	jEvent.launchCases(cases);
      if(data.which === 9) {
        return false;
      }
    }
  });