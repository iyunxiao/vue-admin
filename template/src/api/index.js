/* eslint-disable */

function routes(app) {
  app.use('/*', (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: 401, message: '未授权访问' });
    }
    next();
  });

  app.use('/*', function(req, res) {
    res.status(404).json({ error: 'not found', message: '找不到页面' });
  });
}

module.exports = routes;
