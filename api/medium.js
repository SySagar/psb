const mediumToMarkdown = require("medium-to-markdown");

module.exports = (req, res) => {
  if (req.method === "POST") {

    const { mediumUrl } = req.body;

    mediumToMarkdown
      .convertFromUrl(mediumUrl)
      .then(function (markdown) {
        // console.log(markdown);
       res.send(markdown);
      });
    
  }
};
