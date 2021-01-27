require('dotenv').config();
express = require('express');
app = express();
cors = require('cors');
cookieParser = require('cookie-parser');
port = process.env.PORT;


app.use(cookieParser());
app.use(cors({credentials:true, origin:'http://localhost:3000'}));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

require('./server/config/mongoose.config');
require('./server/routes/user.routes')(app)
server = app.listen(port, () => console.log(`Listening to port ${port}`));