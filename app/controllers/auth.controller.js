const admin = require("firebase-admin");

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = admin.auth().signInWithEmailAndPassword(email, password).then;

    const token = await user.user.getIdToken()

    console.log(token)

  } catch (error) {
    return res.status(500).send(error.message || "Error While Signing in");
  }
};
