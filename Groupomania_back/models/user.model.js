const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

//Schema de création d'une fiche utilisateur.
const userSchema = new mongoose.Schema(
  {
    pseudo: {
      type: String,
      required: true,
      minLength: 3,
      maxLength: 30,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      validate: [isEmail],
      lowercase: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      max: 1024,
      minlength: 4,
    },
    picture: {
      type: String,
      default: "./uploads/profil/random-user.png",
    },
    bio: {
      type: String,
      max: 1024,
      default: "Présentez-Vous!",
    },
    likes: {
      type: [String],
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin"]
  },
  },
  {
    timestamps: true,
  }
);

// fonction pour "saler"(crypter) les mots de passe.
userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

//fonction pour décrypter un mod de passe
userSchema.statics.login = async function (email, password) {
  const user = await this.findOne({ email });
  if (user) {
    const auth = await bcrypt.compare(password, user.password);
    if (auth) {
      return user;
    }
    throw Error("incorrect password");
  }
  throw Error("incorrect email");
};
userSchema.plugin(uniqueValidator); // Verification d'email unique

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
