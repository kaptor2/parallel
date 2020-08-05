async function parallel(funcArray, doneAll) {
  for (i in funcArray) {
    await new Promise(resolve => {
      return funcArray[i](resolve);
    }).then(value => {
      return funcArray[i] = value;
    });
  }

  doneAll(funcArray);
}

var a = function(done) {
  setTimeout(function() {
    done('result a');
  }, 300);
};

var b = function(done) {
  setTimeout(function() {
    done('result b');
  }, 200);
};

parallel([a, b], function(results) {
  console.log(results); // ['result a', 'result b']
});
