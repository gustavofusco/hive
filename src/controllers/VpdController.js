import * as Yup from "yup"
import vpdCelsius from '../data/svpCelsius'
class VpdController
{
  async index(req, resp){
    return resp.json(vpdCelsius)
  }
}

export default new VpdController()
