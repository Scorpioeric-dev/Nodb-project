const data = require("./data");
let id = data.length + 1 

module.exports = {
  getData(req, res) {
    console.log("back connected");
    res.status(200).send(data);
  },
  delete(req, res) {
    const { id } = req.params;
    const index = data.findIndex(taco =>( taco.id === +id))
    data.splice(index, 1)
    res.status(200).send(data)

  },
  styleUpdate(req, res) {
    const { id } = req.params;
    const { name } = req.body;
    const index = uStyles.findIndex(taco =>(
        taco.id === +id
    ))
    uStyles[index].name = name
    res.status(200).send(uStyles)
  },
  addStyle(req, res){
      console.log(req.body)
    data.push({...req.body,id})
      id++
      res.status(200).send(data)
    }










};

//controller set up
