const list = ['5eb041064151a99fe7939ee0',
    '5eb041064151a99fe7939ee1',
    '5eb041064151a99fe7939ede',
    '5eb041064151a99fe7939edf']


const data = [
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

const b = data.filter(el => !list.includes(el))

console.log(b)