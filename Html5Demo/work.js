function fibonacci(n) {
  return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2)
}
this.onmessage = function (event) {
  var value = fibonacci(event.data)
  this.postMessage(value)
}