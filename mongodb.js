const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://cars:cars1234@cluster0.lcihqlh.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });

const ContactUsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

const Form = new mongoose.model("Contact_US", ContactUsSchema);
module.exports = Form;
