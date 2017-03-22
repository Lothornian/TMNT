import {Router} from 'Express';
import data from '../data/data.js';

const router = new Router();

router.get ('/', (req, res) => {

  return res.json(data);

});

router.route('/turtles')
      .get( (req, res) => {

  let turtles = data.filter(chars => chars.race === 'Mutant' || chars.race === 'Turtle' );
  return res.json(turtles);

});

export default router;
