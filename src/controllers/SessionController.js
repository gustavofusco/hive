//!methods: index, show, update, store, destroy

//? index: List all sessions
//? store: Create a session
//? show: listing multiple sessions
//? update: Update a session
//? destory: Delete session

import User from "../models/User";
import * as Yup from "yup";

class SessionController {
  async store(req, resp) {
    const { filename } = req.file;
    const YupValid = Yup.object().shape({
      email: Yup.string().email().required(),
      name: Yup.string().required(),
    });

    if (!(await YupValid.isValid(req.body))) {
      return resp.status(400).json({ error: "Verify you e-mail or name" });
    } else {
      const { email, name } = req.body;

      let user = await User.findOne({ email, name });

      if (!user) {
        user = await User.create({ email, name, photo: filename });
        return resp.json(user);
      } else {
        return resp.status(500).json({ erro: "Usuário já existe" });
      }
    }
  }
}

export default new SessionController();
