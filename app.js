var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var methodOverride = require('method-override');


var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');
var loginRouter = require('./routes/login');
var signupRouter = require('./routes/signup');
var accountRouter = require('./routes/account')
var databaseRouter = require('./routes/database');
var postRouter = require('./routes/post');
var commentRouter = require('./routes/comment');
var followRouter = require('./routes/follow')
var cookieMiddleware = require('./middlewares/cookieLogin');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(session({
  secret:'not_so_Instagra_password_secret',
  resave:true,
  saveUninitialized: true
}))
app.use(logger('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieMiddleware);
app.use(methodOverride('_method'))

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/signup', signupRouter);
app.use('/accounts', accountRouter); 
app.use('/database', databaseRouter);
app.use('/post', postRouter);
app.use('/comment', commentRouter);
app.use('/follow', followRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
