let questions = [
    {
    numb: 1,
    question: "In Express.js, which method is used to create a middleware that is executed for every request to the app?",
    answer: "app.use()",
    options: [
      "app.use()",
      "app.all()",
      "app.get()",
      "app.post()"
    ]
  },
    {
    numb: 2,
    question: "In MongoDB, which method is used to update a document in a collection?",
    answer: "db.collection.updateOne(query, update)",
    options: [
      "db.collection.changeOne(query, update)",
      "db.collection.modifyOne(query, update)",
      "db.collection.updateOne(query, update)",
      "db.collection.editOne(query, update)"
    ]
  },
    {
    numb: 3,
    question: "In Mongoose, how do you define a schema for a collection?",
    answer: "const schema = new mongoose.Schema({...});",
    options: [
      "const schema = new mongoose.Collection({...});",
      "const schema = new mongoose.Model({...});",
      "const schema = new mongoose.Table({...});",
      "const schema = new mongoose.Schema({...});"
    ]
  },
    {
    numb: 4,
    question: "How do you handle 404 errors in an Express.js application?",
    answer: "app.use((req, res) => { res.status(404).send('Not Found'); });",
    options: [
      "app.get('*', (req, res) => { res.status(404).send('Not Found'); });",
      "app.use((req, res) => { res.status(404).send('Not Found'); });",
      "app.post('*', (req, res) => { res.status(404).send('Not Found'); });",
      "app.all((req, res) => { res.status(404).send('Not Found'); });"
    ]
  },
    {
    numb: 5,
    question: "In CSS Grid Layout, which property is used to define the number and size of the rows in a grid?",
    answer: "grid-template-rows",
    options: [
      "grid-template-rows",
      "grid-auto-flow",
      "grid-template-columns",
      "grid-gap"
    ]
  },
  {
    numb: 6,
    question: "Which of the following CSS properties can be used to create a flex container?",
    answer: "display: flex",
    options: [
      "display: grid;",
      "display: flex",
      "display: block;",
      "display: inline-flex;"
    ]
  },
  {
    numb: 7,
    question: "What does the map() method do in JavaScript?",
    answer: "It creates a new array populated with the results of calling a provided function on every element in the calling array",
    options: [
      "It filters elements of an array based on a condition",
      "It creates a new array populated with the results of calling a provided function on every element in the calling array",
      "It reduces the array to a single value",
      "It sorts the elements of an array"
    ]
  },
];