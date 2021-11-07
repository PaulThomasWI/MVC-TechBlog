const router    = require('express').Router();
const sequelize = require('../config/connection');

const { Post, User, Comment } = require('../models');

/*
  ======================================================================
    / route
  ======================================================================
*/
router.get('/', (req, res) => {
    console.log(req.session);
    console.log('/ route');
    
    Post.findAll({
      attributes: [
        'id',
        'title',
        'created_at',
        'post_content'
      ],
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
        }
      ]
    })
      .then(dbData => {
        const posts = dbData.map(post => post.get({ plain: true }));
        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn
          });
      })
      .catch(err => { res.status(500).json(err); });
});

/*
  ======================================================================
    / Login route
  ======================================================================
*/
router.get('/login', (req, res) => {
  console.log('/login route');  

  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  
  res.render('login');
});

/*
  ======================================================================
    / Signup route
  ======================================================================
*/
router.get('/signup', (req, res) => {
  console.log('/signup route');  

  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  
  res.render('signup');
});

/*
  ======================================================================
    / Post route
  ======================================================================
*/
router.get('/post/:id', (req, res) => {
  console.log('/post route');      

  Post.findOne({
      where: { id: req.params.id },
      attributes: [
        'id',
        'title',
        'created_at',
        'post_content'
      ],
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
        }
      ]
    })
      .then(dbData => {
        if (!dbData) {
          res.status(404).json({ message: 'No post found with this id' });
          return;
        }
  
        const post = dbData.get({ plain: true });
  
        res.render('single-post', { post, loggedIn: req.session.loggedIn });
      })
      .catch(err => { res.status(500).json(err); });
});

module.exports = router;