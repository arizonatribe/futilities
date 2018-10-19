import Benchmark from 'benchmark'

function runBenchmarks(log, tests = [], ...args) {
  return tests
    .reduce(
      (suite, [caption, benchmarkTest]) => suite.add(
        caption,
        () => benchmarkTest(...args)
      ),
      new Benchmark.Suite()
    )
    .on('cycle', event => log(String(event.target)))
    .on('complete', function() {
      log(`Fastest is ${this.filter('fastest').map('name')}\n`)
    })
    .run()
}

export default runBenchmarks