
const firstApproachs = {
    "_id": "5eaf0cca6d14848azzaaasss",
    "date": "04-05-2020",
    "branch": "5eadf9437b083568e9ffb778",
    "slot": [
        {
            "_id": "5eaf0cca6d14848asdas34as",
            "invoiceNumber": "INV5EAF0CCA6D14848ASDAS34AS",
            "carOwner": "5eaf0cca6d148487de7f243f",            
            "car": "5eaf0cca6d14848al323jk",
            "technicians": [
                "5eaf0cca6d1pas234lk",
                "5eaf0cca6d14laskjdo3k"
            ],
            "start": 1588532918587,
            "end": null,
            "events": [
                {
                    "status": "ORDERED",
                    "time": 1588543922488
                }
            ]
        }
    ]
}

const secondApproachs = {  // I choose the second approachs    
    "date": "04-05-2020", 
    "branch": "5eadf9437b083568e9ffb778", //REFERS TO Branch
    "invoiceNumber": "INV5EAF0CCA6D14848ASDAS34AS",
    "carOwner": "5eaf0cca6d148487de7f243f", ///REFERS TO USER
    "driver": "",  //REFERS TO user
    "car": "5eaf0cca6d14848al323jk", //REFERS TO USER.CAR
    "technicians": [
        "5eaf0cca6d1pas234lk",
        "5eaf0cca6d14laskjdo3k"
    ],    
    "events": [
        {
            "status": "ORDERED",
            "time": 1588543922488
        }
    ]

}
