function initData() {
  jimData.variables["countLake"] = "a";
  jimData.variables["countCity"] = "a";
  jimData.variables["myWalks"] = "";
  jimData.variables["count"] = "a";
  jimData.variables["BuddyList"] = "";
  jimData.variables["countWalk"] = "a";
  jimData.variables["time"] = "00:01";
  jimData.datamasters["walk"] = [
    {
      "id": 1,
      "datamaster": "walk",
      "userdata": {
        "date": "05/18/20",
        "distance": "1.2 mi",
        "route": "./images/ca0e13c4-16e8-4108-bba2-4cca17c2f6cb.jpg"
      }
    },
    {
      "id": 2,
      "datamaster": "walk",
      "userdata": {
        "date": "05/21/20",
        "distance": "0.8 mi",
        "route": "./images/d52604af-4a61-4879-a10c-91475c0a4bd1.jpg"
      }
    }
  ];

  jimData.datamasters["BuddyList"] = [
    {
      "id": 1,
      "datamaster": "BuddyList",
      "userdata": {
        "Name": "William Kim",
        "Dog name": "coco",
        "contact": "01031039104"
      }
    },
    {
      "id": 2,
      "datamaster": "BuddyList",
      "userdata": {
        "Name": "JJoony Lee",
        "Dog name": "sarang",
        "contact": "01024746905"
      }
    },
    {
      "id": 3,
      "datamaster": "BuddyList",
      "userdata": {
        "Name": "David Cha",
        "Dog name": "pepper",
        "contact": "01012345678"
      }
    },
    {
      "id": 4,
      "datamaster": "BuddyList",
      "userdata": {
        "Name": "Hojin Jeong",
        "Dog name": "popo",
        "contact": "01022224444"
      }
    }
  ];

  jimData.datamasters["Dogs"] = [
    {
      "id": 1,
      "datamaster": "Dogs",
      "userdata": {
        "DogName": "CoCo",
        "Type": "Affenhuahua",
        "Age": "5"
      }
    },
    {
      "id": 2,
      "datamaster": "Dogs",
      "userdata": {
        "DogName": "Pepper",
        "Type": "Pomeranian",
        "Age": "3"
      }
    }
  ];

  jimData.datamasters["Coin"] = [
    {
      "id": 1,
      "datamaster": "Coin",
      "userdata": {
        "Total": "3250",
        "This Week": "400",
        "Today": "50"
      }
    }
  ];

  jimData.datamasters["shopping list"] = [
    {
      "id": 1,
      "datamaster": "shopping list",
      "userdata": {
        "flea and tick collar": "./images/e1b324b2-03fd-4a09-ab4b-e6fe46f0d789.PNG",
        "unscented dog poop bags": "./images/747369ee-4ce2-4783-abf0-f7bdbd2d9bc5.PNG",
        "nail clippers and trimmers": "./images/6dc4489f-4c95-4411-95ab-97fe480f5384.PNG",
        "self cleaning slicker brush": "./images/01ef56eb-eafa-4c91-bb38-9a001dc3c3bb.PNG",
        "antiseptic and antifungal spray": "./images/762aa3f0-d212-4a04-acf6-97f40b3cd239.PNG",
        "rechargeable dog shock collar": "./images/e7e2f91f-a4fa-4b61-89ae-a4963e0a0182.PNG",
        "squeaky plush": "./images/e3bd9e89-5994-4f39-a198-77da63fde3eb.PNG",
        "ultra ball": "./images/7008defa-0a42-4dab-9de4-d88b0da18043.PNG",
        "duckworth duck 13": "./images/8daf93e4-a22a-4027-88a5-185be4ab6669.PNG",
        "wooden dog chew toy": "./images/8b9df771-430b-4950-acd5-504df2e232d8.PNG",
        "giggle ball": "./images/ad75b9fa-338c-460b-81f0-1d127977fbda.PNG",
        "dog ball thrower": "./images/d6307f38-73c3-4fec-a82a-d5b655f561f8.PNG",
        "life protection formula": "./images/24e6770d-367a-4760-95b1-19d827575179.PNG",
        "minichunks": "./images/63fbac31-c747-4e20-b486-912a7d36157d.PNG",
        "focus": "./images/c17c34d9-5915-45ca-94ca-4435f138c022.PNG",
        "savor": "./images/cd0e4e8f-7a31-4d27-8caa-e207ca112ce0.PNG",
        "adult dry dog food": "./images/32eb6f33-1638-496f-9139-e07e2e5b78ab.PNG",
        "sensitive stomach and skin": "./images/73b4d727-d5ea-45b3-be3a-b70f0bd3dcd1.PNG",
        "ear wash": "./images/7a45bf2b-b851-421d-974f-943a0a67bbd2.PNG",
        "deodorizing bath wiipes": "./images/139bc20c-d7e0-4889-92cd-a6be7a7012cd.PNG",
        "hair remover": "./images/fce6d6c9-cf84-47b3-9437-217bc4991edb.PNG",
        "dog shaver clipper set": "./images/5ae3c647-0a3b-4b81-bcec-5367c8163996.PNG",
        "nail grooming and grinding tool": "./images/298b4e5e-62ad-4df4-b29f-31887fd39b81.PNG",
        "stain and odor eliminator": "./images/0a59682a-b58b-429c-9228-201941be7a9b.PNG",
        "dog poop bags": "./images/5c147b33-47fb-4608-b67c-8233318b21c1.PNG",
        "custom id tag": "./images/d6e27fb6-b2b0-4c1c-87ac-af6884cd844a.PNG",
        "life jacket": "./images/3a406531-85a8-4538-827e-4899b2280305.PNG",
        "waterproof shoes": "./images/7735925b-dada-46c6-a06a-214a2789681b.PNG",
        "dog bandanas": "./images/38c6107b-e18f-42eb-abe8-773a54ebafd4.PNG",
        "small sunglasses": "./images/8515d1ec-2e36-44fe-9daf-33a6acff193e.PNG",
        "anxiety jacket": "./images/7c7c527b-d836-46d6-9042-f00fe62157e7.PNG",
        "color dog boots": "./images/42231884-b4c4-4969-8fa6-033354e00a70.PNG"
      }
    }
  ];

  jimData.datamasters["Users"] = [
    {
      "id": 1,
      "datamaster": "Users",
      "userdata": {
        "Login_name": "hjoonl94",
        "Password": "lemongoat833"
      }
    },
    {
      "id": 2,
      "datamaster": "Users",
      "userdata": {
        "Login_name": "dongdong",
        "Password": "12345"
      }
    }
  ];

  jimData.isInitialized = true;
}