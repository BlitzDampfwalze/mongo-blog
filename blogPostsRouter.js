const { BlogPost } = require('./models')

module.exports = app => {
    app.post('/blogposts', (req, res) => {
        console.log(req.body);
        const blogPost = new BlogPost({
            text: req.body.text,
        });
        blogPost
            .save()
            .then(doc => {
                console.log('some text then')
                res.send(doc);
            })
            .catch(error => {
                console.log('some text catch')
                res.status(400).send(error);
            });
    });

    app.get('/blogposts', (req, res) => {
        blogPost
            .find()
            .then(doc => {
                res.json(doc.map(doc => doc.serialize()));
            })
            .catch(error => {
                console.log(error)
                res.status(500).json({error: 'something went wrong'});
            });
    });

    app.get('/blogposts/:id', (req, res) => {
        blogPost
            .findById(req.params.id)
            .then(doc => res.json(doc.serialize()))
            .catch(error => {
                console.log(error)
                res.status(500).json({error: 'something went wrong!'});
            });
    });

};


