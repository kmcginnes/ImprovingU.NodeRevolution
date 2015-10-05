import path from 'path';
import Express from 'express';

const PATH_STYLES = path.resolve(__dirname, '../client/styles');
const PATH_DIST = path.resolve(__dirname, '../../dist');

var app = Express();

app.use('./styles', Express.static(PATH_STYLES));
app.use(Express.static(PATH_DIST));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

var server = app.listen(process.env.PORT || 3000, () => {
    var port = server.address().port;

    console.log('Server is listening on port %s', port);
});
