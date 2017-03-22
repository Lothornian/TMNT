import {Router} from 'Express';
import data from '../data/data.js';

const router = new Router();

router.get ('/', (req, res) => {

  return res.json(Presidents);

});

router.route('/turtles')
      .get( (req, res) => {

  let Democrats = Presidents.filter(pres => pres.party === 'Democratic');
  return res.json(Democrats);

});

export default app;
