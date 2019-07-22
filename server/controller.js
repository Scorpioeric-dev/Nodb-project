const data = require("./data");
let id = data.length + 1;

module.exports = {
  getData(req, res) {
    console.log("back connected");
    res.status(200).send(data);
  },
  delete(req, res) {
    const { id } = req.params;
    const index = data.findIndex(taco => taco.id === +id);
    data.splice(index, 1);
    res.status(200).send(data);
  },
  styleUpdate(req, res) {
    console.log(req.params, req.body);
    const { id } = req.params;
    const { name, img } = req.body;

    const index = data.findIndex(taco => taco.id === +id);
    data[index].img = img;
    data[index].name = name;
    res.status(200).send(data);
  },
  addStyle(req, res) {
    // console.log(req.body)
    data.push({ ...req.body, id });
    id++;
    // console.log(data)
    res.status(200).send(data);
  }
};

//controller set up
