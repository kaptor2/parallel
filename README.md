# Недописаная функция "parallel(funcArray, doneAll)":

```javascript 
function parallel(funcArray, doneAll) {

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

parallel([a,b], function(results) {
  console.log(results); // ['result a', 'result b']
}); 
```
Нужно её дописать. Что-то вроде аналога promise.all. И не забудьте, что результирующий массив должен сохранять тот порядок, в котором передавались функции.
