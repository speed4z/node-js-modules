import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

  inquirer
  .prompt([
    {
      message: "Type your URL" ,
      name: "URL",
    },
  ])
  .then((answers) => {
    console.log(answers);
    const URL = answers.URL;
    const qr_png= qr.image(URL);
    qr_png.pipe(fs.createWriteStream("qr_url.png"));

    fs.writeFile("URL.txt",URL,(error)=>{
      if (error) throw error;
  console.log("The file has been saved!");
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });