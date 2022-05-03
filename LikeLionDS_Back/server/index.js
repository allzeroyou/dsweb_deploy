const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-Parser');

app.use(express.json());
app.use(cors());
const db = require('./models');
//라우터
const studyRouter = require('./routes/Study');
const usersRouter = require('./routes/Users');

app.use(express.static("uploads"));

app.use("/study", studyRouter);
app.use("/auth", usersRouter);
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json())
app.use(cors())
db.sequelize.sync().then(() => {
    app.listen(3001, () => {
        console.log("Server Running on Port 3001");
    });
});

