const Pages = require("../models/Pages");

exports.getAll = async (req, res) => {
  try {
    const allPages = await Pages.find({});
    res.status(200).send(allPages);
  } catch (error) {
    res.status(500).send(error.message || "Error While Getting All Pages");
  }
};

exports.getPage = async (req, res) => {
  try {
    const page = await Pages.find({ content: req.params.content });

    return res.status(200).send(page);
  } catch (error) {
    res.status(500).send(error.message || "Error While getting page");
  }
};

exports.create = async (req, res) => {
  try {
    const { content, title_ka, title_eng, description_ka, description_eng } =
      req.body;

    const page = new Pages({
      content,
      title_ka,
      description_ka,
      title_eng,
      description_eng,
    });

    const [findedPage] = await Pages.find({content})

    if(findedPage){
      return res.status(404).send("Page Already Exsists"); 
    }

    const createdPage = await page.save();

    return res.status(201).send(createdPage);
  } catch (error) {
    return res.status(500).send(error.message || "Error While Creating Page");
  }
};

exports.update = async (req, res) => {
  try {
    const { content, title_ka, title_eng, description_ka, description_eng } =
      req.body;

    const updatedPage = await Pages.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          content,
          title_ka,
          description_ka,
          title_eng,
          description_eng,
        },
      },
      { new: true }
    );

    return res.status(200).send(updatedPage);
  } catch (error) {
    return res.status(500).send(error.message || "Error While Updating Page");
  }
};
