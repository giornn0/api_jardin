const { check, oneOf, validationResult } = require('express-validator');
app.post('/start-freelancing', oneOf([
  check('programming_language').isIn(['javascript', 'java', 'php']),
  check('design_tools').isIn(['canva', 'photoshop', 'gimp'])
]), (req, res, next) => {
  try {
    validationResult(req).throw();

    // yay! we're good to start selling our skilled services :)))
    res.json(...);
  } catch (err) {
    // Oh noes. This user doesn't have enough skills for this...
    res.status(400).json(...);
  }
});