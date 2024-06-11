// const cookieParser = require('cookie-parser');
// const express = require('express');
// const app = express();


// app.use(cookieParser())
// app.get('/', (req, res) => {
//     res.cookie('name', 'abc');
//     res.send('done!!!!!')
// })

// //now if we go to any route cookie will be send to the page without adding res.cookie as we have set it in earlier route
// app.get('/next', (req, res) => {
//     console.log(req.cookies)
//     res.send('next page..')
// })

// app.listen(3000);




                //bcrypt

// const express = require('express');
// const app = express();
// const bcrypt = require('bcrypt');




// app.get('/', (req, res) => {
//     bcrypt.genSalt(10, function(err, salt) {
//         bcrypt.hash('123', salt, function(err, hash) {
//           console.log(`password which will be stored in db is`,hash)
//           res.send('done')
//         });
//     });
// })


    // app.get('/', (req, res) => {
    //     bcrypt.compare('123', '$2b$10$nXE6/0J7Boz6zVi3FU4kNedyAjUiW/ZeAVywdlEg7MCjUiol0ItD6', function(err, result) {
    //         console.log(result);
    //         res.send('checking')
    //     });
    // })



                //      jwt
    

    
    const express = require('express');
    const app = express();
    const bcrypt = require('bcrypt');
    const jwt = require('jsonwebtoken');
    const cookieParser = require('cookie-parser');

    
    app.use(cookieParser())
    app.get('/', (req, res) => {   

        let token = jwt.sign({ email: 'abc@gmail.com' }, 'secret');
        res.cookie('token', token)
        res.send('done!')
    })

    app.get('/read', (req, res) => {
        
       let data = jwt.verify(req.cookies.token, 'secret');
       console.log(data);
    })


    app.listen(3000);