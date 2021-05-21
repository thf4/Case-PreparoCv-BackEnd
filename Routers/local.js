const express = require("express");
const router = express.Router();
const User = require("../Models/user");
const bcrypt = require("bcrypt");
const auth = require("../Middlewares/auth");

/* Update data */
router.put("/:_id", auth, async (req, res) => {
  const { body = {}, params } = req;
  const { _id } = params;
  const { email, name, surname, telephone, github, behance, linkedin } = body;
  try {
    const response = await User.updateOne(
      { _id },
      {
        name,
        surname,
        email,
        telephone,
        github,
        behance,
        linkedin,
      }
    ).lean();
    if (response.ok)
      return res.status(200).json({ message: "Atualizado com sucesso!" });
  } catch (err) {
    return res.status(401).json({ message: "Erro ao editar!" });
  }
});

/* Delete User */
router.delete("/:_id", auth, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params._id, () => {
      return res.json({
        message: "Deleted success!",
      });
    }).lean();
  } catch (err) {
    return res.status(400).json({
      message: "Erro too delete!",
    });
  }
});

/* Local updating post */

router.put("/local/:_id", auth, async (req, res) => {
  const { body = {}, params } = req;
  const { _id } = params;
  const { statee, zip, district, address, city, complement } = body;

  try {
    const response = await User.updateOne(
      { _id },
      {
        statee,
        zip,
        district,
        address,
        city,
        complement,
      }
    ).lean();
    if (response.ok)
      return res.status(200).json({ message: "Atualizado com sucesso!" });
  } catch (err) {
    return res.status(400).json({
      message: "Erro ao atualizar!",
    });
  }
});

module.exports = router;
