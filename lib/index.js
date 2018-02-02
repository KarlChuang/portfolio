const express = require('express');
const path = require('path');

// const apiRouter = require('./apis/index');

const port = process.env.PORT;
const filePath = (process.env.NODE_ENV === 'production') ? '../../' : '../';

const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// app.use(session);
// app.use(cookieParser());
// app.use(passport.initialize());
// app.use(passport.session());

app.use(express.static(path.join(__dirname, `${filePath}/public`)));
app.use(express.static(path.join(__dirname, `${filePath}/dist/bundle`)));

// app.use('/auth', authRouter);
// app.use('/api', apiRouter);

app.listen(port || 5000, () => console.log(`listening on port ${port || 5000}`));
