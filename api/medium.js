const mediumToMarkdown = require("medium-to-markdown");

module.exports = (req, res) => {
  if (req.method === "GET") {
    mediumToMarkdown
      .convertFromUrl("https://medium.com/@sysagar07/github-environments-for-your-next-big-project-774bbbe32635")
      .then(function (markdown) {
        // console.log(markdown);
       res.send(markdown);
      });
    
  }
};
