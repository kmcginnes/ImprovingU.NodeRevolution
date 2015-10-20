import fs from 'fs'
import path from 'path'

export default (dir, cb) => {
  console.log('Inside findLargest');

  fs.readdir(dir, (er, files) => {
    if(er) return cb(er);

    files.forEach((file, index) => {
      fs.stat(path.join(dir, file), (er, stat) => {

      });
    });
  });

  cb(null, 'foo');
}
