const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let person_list=[  // move the array outside of the POST endpoint
    {name:"naresh",addr:'hyd',id:1},
    {name:"hai",addr:'hyd1',id:1},
    {name:"hello",addr:'hyd2',id:1},
    {name:"koti",addr:'hyd3',id:1},
];

app.post("/",(req,res)=>{
    let_body=req.body;
    console.log(req.body)
    person_list.push(req.body);  // add the new person to the array
    res.send(person_list);
});

app.get("/getPersons", (req, res) => {
    res.json(person_list);  // send the entire person_list in response
});

app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
});
