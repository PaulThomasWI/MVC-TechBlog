const router   = require('express').Router();
const withAuth = require('../../utils/auth');

const { Comment } = require('../../models');

/*
  ======================================================================
    Comment route get all
  ======================================================================
*/
router.get('/', (req, res) => {
  Comment.findAll({})
    .then(dbData => res.json(dbData))
    .catch(err => { res.status(500).json(err); });
});

/*
  ======================================================================
    Comment route create (authenticated)
  ======================================================================
*/
router.post('/', withAuth, (req, res) => {
  if (req.session) {
    Comment.create({
      comment_text: req.body.comment_text,
      post_id: req.body.post_id,
      // use the id from the session
      user_id: req.session.user_id
    })
      .then(dbData => res.json(dbData))
      .catch(err => { res.status(400).json(err); });
  }
});

/*
  ======================================================================
    Comment delete create (authenticated)
  ======================================================================
*/
router.delete('/:id', withAuth, (req, res) => {
  Comment.destroy({
      where: { id: req.params.id }
    })
      .then(dbData => {
        if (!dbData) {
          res.status(404).json({ message: 'No comment found with this id' });
          return;
        }
        res.json(dbData);
      })
      .catch(err => { res.status(500).json(err); });
});

module.exports = router;