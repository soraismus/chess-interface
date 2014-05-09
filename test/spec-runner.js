require.config({
  baseUrl : "../src/",
  paths : {
    jasmine     : '../test/lib/jasmine',
    jasmineHtml : '../test/lib/jasmine-html',
    mydash      : 'lib/mydash',
    testem      : '/testem',
    spec        : '../test/spec',
    jFns        : '../test/spec/jasmine-fns',
  },
  shim : {
    jasmine : {
      exports : 'jasmine'
    },
    jasmineHtml  : {
      deps    : ['jasmine'],
      exports : 'jasmine'
    }
  }
});

require (['jasmineHtml', 'testem'], function () {

  var jasmineEnv = jasmine.getEnv();
  jasmineEnv.updateInterval = 1000;

  var htmlReporter = new jasmine.HtmlReporter();

  jasmineEnv.addReporter(htmlReporter);

  jasmineEnv.specFilter = function (spec) {
    return htmlReporter.specFilter(spec);
  };

  var specs = [];

	specs.push ('spec/test-spec');
  //specs.push ('spec/assertions-spec');
  //specs.push ('spec/constants-spec');
  //specs.push ('spec/extractors-spec');
  //specs.push ('spec/types-spec');

	require (specs, function () {
		jasmineEnv.execute ();
	});
});
