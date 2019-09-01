const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const fileUpload = require('express-fileupload');
//settings database
require('./db');

//Initiate app
const app = express();
app.use(fileUpload({
    createParentPath: true
}));
//Configure app
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

//Models    
require('./Models');

//Routes
app.use(require('./routes'));

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        errors: {
            message: err.message,
            error: {},
        },
    });

});

app.listen(8002, () => console.log('Server running on http://localhost:8002/'));
