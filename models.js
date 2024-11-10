const mongoose= require ("mongoose");

const usersSchema= new mongoose.Schema({
    name: {
        type: String,
      
    },
    age: {
      type: Number,
    },
});

const user= mongoose.model("user", usersSchema);

module.exports= {user};