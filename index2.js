function parallel(funcArray, doneAll) {
  let promises = new Array();
  funcArray.forEach(fun => promises.push(new Promise(resolve => fun(resolve))));
  Promise.all(promises).then(value => doneAll(value));
}

var a = function(done) {
  setTimeout(() => {
    done('result a');
  }, 300);
};

var b = function(done) {
  setTimeout(() => {
    done('result b');
  }, 200);
};

const e = [a, b];

parallel(e, results => {
  console.log(results);
});