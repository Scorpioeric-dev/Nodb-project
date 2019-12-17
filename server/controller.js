module.exports = {
  getData: async (req, res) => {
    const db = req.app.get("db");
    const { name, img } = req.query;
    const uStyles = await db.get_Data([name, img]);
    console.log(uStyles);
    res.status(200).send(uStyles);
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
  addStyle: async (req, res) => {
    // console.log(req.body)
    const db = req.app.get("db");
    const {id,name, img } = req.body;
    const newStyle = await db.add_Style([id,name,img])
    console.log(newStyle)
    res.status(200).send(newStyle);
  }

};

//controller set up
