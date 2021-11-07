const router    = require('express').Router();
const sequelize = require('../../config/connection');
const withAuth  = require('../../utils/auth');

const { Post, User, Comment } = require('../../models');

/*
  ======================================================================
    Post get all route
  ======================================================================
*/
router.get('/', (req, res) => {
  Post.findAll({
      attributes: [
          'id',
          'title',
          'created_at',
          'post_content'
      ],
    order: [['created_at', 'DESC']],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username', 'twitter', 'github']
        }
      },
      {
        model: User,
        attributes: ['username', 'twitter', 'github']
      },
    ]
  })
    .then(dbData => res.json(dbData))
    .catch(err => { res.status(500).json(err); });
});

/*
  ======================================================================
    Post get one route (by id)
  ======================================================================
*/
router.get('/:id', (req, res) => {
  Post.findOne({
    where: { id: req.params.id },
    attributes: [
      'id',
      'title',
      'created_at',
      'post_content'
    ],
    include: [
      // include the Comment model here:
      {
        model: User,
        attributes: ['username', 'twitter', 'github']
      },
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username', 'twitter', 'github']
        }
      }
    ]
  })
    .then(dbData => {
      if (!dbData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbData);
    })
    .catch(err => { res.status(500).json(err); });
});

/*
  ======================================================================
    Post create route
  ======================================================================
*/
router.post('/', withAuth, (req, res) => {
  Post.create({
    title: req.body.title,
    post_content: req.body.post_content,
    user_id: req.session.user_id
  })
    .then(dbData => res.json(dbData))
    .catch(err => { res.status(500).json(err); });
});

/*
  ======================================================================
    Post update route (by id)
  ======================================================================
*/
router.put('/:id', withAuth, (req, res) => {
  Post.update({
      title: req.body.title,
      post_content: req.body.post_content
    },
    {
      where: { id: req.params.id }
    })
    .then(dbData => {
      if (!dbData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbData);
    })
    .catch(err => { res.status(500).json(err); });
  });

/*
  ======================================================================
    User delete route (by id)
  ======================================================================
*/
router.delete('/:id', withAuth, (req, res) => {
  Post.destroy({
    where: { id: req.params.id }
  })
    .then(dbData => {
      if (!dbData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(dbData);
    })
    .catch(err => { res.status(500).json(err); });
});

module.exports = router;