// Generated by CoughSyrup 0.1.0
(function() {
  define(['constants'], function(c) {
    var black_question_, defaults, to_hyphen_black, to_hyphen_white, white_question_;
    defaults = function(obj) {
      var args;
      args = Array.prototype.slice.call(arguments, 1);
      args.forEach(function(source) {
        var prop, _results;
        if (source) {
          _results = [];
          for (prop in source) {
            if (obj[prop] === void 0) {
              _results.push(obj[prop] = source[prop]);
            } else {
              _results.push(void 0);
            }
          }
          return _results;
        }
      });
      return obj;
    };
    black_question_ = function(sq) {
      return sq === String.toLowerCase(sq) && sq !== c.empty_hyphen_square;
    };
    white_question_ = function(sq) {
      return sq === String.toUpperCase(sq) && sq !== c.empty_hyphen_square;
    };
    to_hyphen_black = String.toLowerCase;
    to_hyphen_white = String.toUpperCase;
    return {
      black_question_: black_question_,
      defaults: defaults,
      white_question_: white_question_,
      to_hyphen_black: to_hyphen_black,
      to_hyphen_white: to_hyphen_white
    };
  });

}).call(this);
