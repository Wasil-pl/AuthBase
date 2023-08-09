const express = require('express');
const router = express.Router();

function requireLogin(req, res, next) {
  if (!req.user) {
    return res.redirect('/user/no-permission');
  }

  next();
}

router.get('/logged', requireLogin, (req, res) => {
  res.render('logged', {
    user: req.user.displayName,
    avatar: req.user.photos[0].value,
  });
  console.log(req.user);
});

router.get('/profile', requireLogin, (req, res) => {
  res.render('profile');
});

router.get('/profile/settings', requireLogin, (req, res) => {
  res.render('settings');
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

module.exports = router;
