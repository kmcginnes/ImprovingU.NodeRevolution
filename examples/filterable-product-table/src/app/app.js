import Debug from 'debug';

var debug = Debug('myApp');

class App {

    constructor(options) {
        debug('create app with options', options);

        this.state = options.state;
    }

}

export default App;
