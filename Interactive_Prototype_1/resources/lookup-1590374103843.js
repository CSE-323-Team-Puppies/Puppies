(function(window, undefined) {
  var dictionary = {
    "909f49e1-e424-4e0c-9a2a-73a3694fe73a": "Routes",
    "8531209f-9e41-40a4-b5c7-be4dd72e907c": "ParkRoute_details",
    "6fba51eb-1849-40e4-a465-77074f19ad8a": "Profile",
    "0433923f-167c-4dc2-9e17-f65bb57290a2": "City_Route_2",
    "8c5c4ab1-f9d2-4070-9682-da2a6ed5193f": "Initial_Page",
    "a461465d-d856-4004-b372-0877baa9d473": "City_Route_1",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Main",
    "33fcfd2d-e1cc-465b-9faf-600db9d7cb4b": "Lake_Route_2",
    "84487db1-c012-4f85-92cd-d21524cfdd14": "Lake_Route_1",
    "4c7fa097-b8fc-4a2e-9382-94d18354b9ef": "WalkBuddies",
    "095aea9e-8de3-4ce6-9386-45ce5a5cdf5a": "LakeRoute_detail",
    "beed6df1-a333-43e9-8313-652ee53403ef": "CityRoute_details",
    "ab0323e5-fec3-45dd-9736-cf449b3336e7": "Login_Page",
    "609fce90-5507-48c8-be2e-14a743147f7b": "City_Route",
    "c6139d91-419c-4ea4-b20f-aea8da7c311a": "Lake_Route",
    "c2bbe693-0999-4f51-bc36-02530c519d6d": "Points",
    "4e010f53-d4c4-46b7-803a-f8ad8a950ef5": "Park_Route_3",
    "c4528c64-30d6-4aa0-995d-b04d6cafd439": "onWalk_2",
    "f7f330ba-f12f-423f-98ff-d2949507d5dd": "onWalk_1",
    "a68bf7bf-9e32-48a9-9da2-62eb55efd092": "Park_Route_1",
    "fee7eefc-8cec-4cf8-9996-11c0f4f79fbe": "Shopping",
    "83cb6cc9-3f05-48f1-96bd-859efbbfbeed": "Park_Route",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "default",
    "7c2d2bf4-bdf4-4f2c-8c92-75bc08cfecf3": "Routes_details",
    "b22b4f4f-ed96-4d19-ac2d-7b2c07b0295c": "empty",
    "2bec62ec-c485-43a9-b7de-b7d1612fdd03": "header",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);