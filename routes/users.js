let express = require('express');
let router = express.Router();

let users = ['alice', 'bob', 'jack', 'help']

/* GET users listing. */
router.get('/:userId', (req, res) => 
  res.json(users.filter(user => user === req.params.userId))
);

router.get('/', (req, res) =>
  res.json(users)
);

router.post('/', (req, res) => {
  res.json([...users, req.body.new].filter(user => user !== req.body.old))
});

router.put('/:userId', (req, res) => {
  res.json([...users, req.params.userId])
});

router.delete('/:userId', (req, res) => {
  res.json(users.filter(user => user !== req.params.userId))
});

router.get('/:userId/:index', (req, res) =>
  res.json(removeUser(req.params.userId)(req.params.index))
);

const removeUser = (userId) => (index) => users.filter(user => user !== userId)[index];

module.exports = router;
