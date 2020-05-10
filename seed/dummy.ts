
import { User } from '../src/user/interface/user.interface'
import { AuthRole } from '../auth/auth-role.enum'
import { Booking } from '../booking/interface/booking.interface'
import { BookingEventsEnum } from '../booking/booking-events.enum'
import { Car } from '../car/car.interface'
import { Branch } from '../branch/interface/branch.interface'
export const UserSeed: User[] = [
    {
        "_id": "5eb71cb14f4f88abd2cd13e2",
        "userName": "admin",
        "email": "admin@test.mail.com",
        "fullName": "Admin Super",
        "phone": "00000000",
        "password": "e17b046656a559ebd17494f237a72834",
        "role": AuthRole.ADMIN
    },
    {
        "_id": "5eb0268b16fe78113ff04296",
        "userName": "user",
        "email": "user@test.com",
        "password": "e17b046656a559ebd17494f237a72834",
        "fullName": "user 1233",
        "phone": "01232312",
        "role": AuthRole.CAR_OWNER,
        "cars": [
            {
                "numberPlate": "X-28012Annn",
                "color": "greay",
                "detail": {
                    "_id": "5ead78c01d42c331221fe689",
                    "brand": "asdasd",
                    "year": 2018,
                    "model": "100",
                    "type": "SUV"
                }
            }
        ],
        "detail": [
            {
                "field": "phone",
                "value": "+60 92323"
            }
        ]
    },
    {

        "userName": "driver1",
        "email": "driver1@test.com",
        "password": "e17b046656a559ebd17494f237a72834",
        "fullName": "driver1 1233",
        "phone": "0111111",
        "role": AuthRole.DRIVER
    },
    {

        "userName": "driver2",
        "email": "driver2@test.com",
        "password": "e17b046656a559ebd17494f237a72834",
        "fullName": "driver2 1233",
        "phone": "0111111",
        "role": AuthRole.DRIVER
    },
    {

        "_id": "5eb041064151a99fe7939ede",
        "userName": "technician1",
        "email": "technician1@test.com",
        "password": "e17b046656a559ebd17494f237a72834",
        "fullName": "technician1 1233",
        "phone": "0111111",
        "role": AuthRole.TECHNICIAN
    },
    {

        "_id": "5eb041064151a99fe7939edf",
        "userName": "technician2",
        "email": "technician2@test.com",
        "password": "e17b046656a559ebd17494f237a72834",
        "fullName": "technician2 1233",
        "phone": "0111111",
        "role": AuthRole.TECHNICIAN
    },
    {

        "_id": "5eb041064151a99fe7939ee0",
        "userName": "technician3",
        "email": "technician3@test.com",
        "password": "e17b046656a559ebd17494f237a72834",
        "fullName": "technician3 1233",
        "phone": "0111111",
        "role": AuthRole.TECHNICIAN
    },
    {

        "_id": "5eb041064151a99fe7939ee1",
        "userName": "technician4",
        "email": "technician4@test.com",
        "password": "e17b046656a559ebd17494f237a72834",
        "fullName": "technician4 1233",
        "phone": "0111111",
        "role": AuthRole.TECHNICIAN
    },
    {

        "_id": "5eb041064151a99fe7939ee2",
        "userName": "technician5",
        "email": "technician5@test.com",
        "password": "e17b046656a559ebd17494f237a72834",
        "fullName": "technician5 1233",
        "phone": "0111111",
        "role": AuthRole.TECHNICIAN
    },
    {

        "_id": "5eb041064151a99fe7939ee3",
        "userName": "technician6",
        "email": "technician6@test.com",
        "password": "e17b046656a559ebd17494f237a72834",
        "fullName": "technician6 1233",
        "phone": "0111111",
        "role": AuthRole.TECHNICIAN
    },
    {

        "_id": "5eb041064151a99fe7939ee4",
        "userName": "technician7",
        "email": "technician7@test.com",
        "password": "e17b046656a559ebd17494f237a72834",
        "fullName": "technician7 1233",
        "phone": "0111111",
        "role": AuthRole.TECHNICIAN
    },
    {

        "_id": "5eb041064151a99fe7939ee5",
        "userName": "technician8",
        "email": "technician8@test.com",
        "password": "e17b046656a559ebd17494f237a72834",
        "fullName": "technician8 1233",
        "phone": "0111111",
        "role": AuthRole.TECHNICIAN
    },
    {

        "_id": "5eb041064151a99fe7939ee6",
        "userName": "technician9",
        "email": "technician9@test.com",
        "password": "e17b046656a559ebd17494f237a72834",
        "fullName": "technician9 1233",
        "phone": "0111111",
        "role": AuthRole.TECHNICIAN
    },
    {

        "_id": "5eb041064151a99fe7939ee7",
        "userName": "technician10",
        "email": "technician10@test.com",
        "password": "e17b046656a559ebd17494f237a72834",
        "fullName": "technician10 1233",
        "phone": "0111111",
        "role": AuthRole.TECHNICIAN
    }

]


export const BookingSeed: Booking[] = [
    {
        "_id" : "5eb7643cfdb308c065fc6b0f",
        "date": "04-05-2020",
        "branch": "5eadf9437b083568e9ffb778",
        "invoiceNumber": "INV5EB7643CFDB308C065FC6B0F",
        "carOwner": "5eb0268b16fe78113ff04296",        
        "carNumberPlate": "X-28012Annn",
        "technicians": [
            "5eb041064151a99fe7939ede",
            "5eb041064151a99fe7939edf"
        ],
        "events": [
            {
                "status": BookingEventsEnum.ORDERED,
                "time": 1588543922488
            }
        ]

    }

]

export const CarSeed: Car[] = [
    {
        "_id": "5eac558ae7179a42f172d389",
        "brand": "Acura",
        "year": 2018,
        "model": "RLX Sport Hybrid",
        "type": "Sedan",
    },
    {
        "_id": "5eac55b1e7179a42f172d398",
        "brand": "Acura",
        "year": 2018,
        "model": "MDX",
        "type": "SUV",
    },
    {
        "_id": "5eac55c4e7179a42f172d39b",
        "brand": "Acura",
        "year": 2016,
        "model": "RDX",
        "type": "SUV",
    },
    {
        "_id": "5eac55fbe7179a42f172d3ab",
        "brand": "Acura",
        "year": 2014,
        "model": "MDX",
        "type": "SUV",
    },
    {
        "_id": "5eac7324f67fc91f4d4d8f92",
        "brand": "Acura",
        "year": 2018,
        "model": "RLX",
        "type": "Sedan",
    },
    {
        "_id": "5ead5b93f834bf1848ef4667",
        "brand": "Acura",
        "year": 2018,
        "model": "MDX",
        "type": "SUV",


    }
]

export const BranchSeed: Branch[] = [
    {
        "_id": "5eadf9437b083568e9ffb778",
        "name": "BMW Malaysia Sdn. Bhd",
        "address": "3501, Jalan Teknokrat 5, Cyber 5, 63000 Cyberjaya, Selangor, Malaysia",
        "phone": "+60 3-8887 3888",
        "startWorkingHour": 9,
        "endWorkingHour": 16,
        "technicians": [
            "5eb041064151a99fe7939ede",
            "5eb041064151a99fe7939edf",
            "5eb041064151a99fe7939ee0",
            "5eb041064151a99fe7939ee1",
            "5eb041064151a99fe7939ee2",
            "5eb041064151a99fe7939ee3",
            "5eb041064151a99fe7939ee4",
            "5eb041064151a99fe7939ee5",
            "5eb041064151a99fe7939ee6",
            "5eb041064151a99fe7939ee7"
        ]

    }
]