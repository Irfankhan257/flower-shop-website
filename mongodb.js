const mongoose=require('mongoose')

mongoose
  .connect(
    "mongodb+srv://Irfankhan:irfan12345@cluster0.ta6pqla.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("database connected");
  })
  .catch(() => {
    console.log("database failed");
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