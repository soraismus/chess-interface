require.config({
  baseUrl : "../src/",
  paths : {
    jasmine       : '../test/lib/jasmine',
    jasmineHtml   : '../test/lib/jasmine-html',
    jFns          : '../test/spec/jasmine-fns',
    mydash        : 'lib/mydash',
    spec          : '../test/spec',
    specConstants : '../test/spec/spec-constants',
    testem        : '/testem',
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

  var specs = [
    'spec/assertions-spec',
    'spec/extractors-spec',
    'spec/game-service-spec',
    'spec/king-spec',
    'spec/knight-spec',
    'spec/pawn-spec',
    'spec/piece-spec',
    'spec/rook-spec',
    'spec/slider-spec',
    'spec/stepper-spec',
    'spec/types-spec',
    'spec/utilities-spec'
  ]

	require (specs, function () {
		jasmineEnv.execute ();
	});
});
