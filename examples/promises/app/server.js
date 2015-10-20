import findLargest from './findLargest'

findLargest('../../../', (er, filename) => {
  if (er) return console.error(er);

  console.log('The largest file was: ' + filename);
});
