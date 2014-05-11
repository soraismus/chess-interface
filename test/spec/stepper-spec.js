// Generated by CoughSyrup 0.1.0
(function() {
  define(['mydash', 'jFns', 'specConstants', 'constants', 'constructors', 'utilities', 'stepper'], function(_, j, sc, c, g, u, st) {
    var contravenes, descr, each_hyphen_contravenes, each_hyphen_fn_hyphen_result_hyphen_equals, each_hyphen_satisfies, each_hyphen_throws, gen_hyphen_pred_hyphen_guards, satisfies, t, test_hyphen_predicate, test_hyphen_spec, test_hyphen_throwing_hyphen_transformation, test_hyphen_transformation, throws, to_hyphen_be, to_hyphen_be_hyphen_array, to_hyphen_be_hyphen_false, to_hyphen_be_hyphen_fn, to_hyphen_be_hyphen_nbr, to_hyphen_be_hyphen_true, to_hyphen_equal, to_hyphen_have_hyphen_length, to_hyphen_throw, xdescr, xt;
    descr = j.descr, xdescr = j.xdescr, t = j.t, xt = j.xt, test_hyphen_spec = j.test_hyphen_spec, to_hyphen_throw = j.to_hyphen_throw, to_hyphen_be = j.to_hyphen_be, to_hyphen_equal = j.to_hyphen_equal, to_hyphen_be_hyphen_true = j.to_hyphen_be_hyphen_true, to_hyphen_be_hyphen_false = j.to_hyphen_be_hyphen_false, satisfies = j.satisfies, contravenes = j.contravenes, throws = j.throws, each_hyphen_fn_hyphen_result_hyphen_equals = j.each_hyphen_fn_hyphen_result_hyphen_equals, each_hyphen_satisfies = j.each_hyphen_satisfies, each_hyphen_contravenes = j.each_hyphen_contravenes, each_hyphen_throws = j.each_hyphen_throws, to_hyphen_be_hyphen_array = j.to_hyphen_be_hyphen_array, to_hyphen_be_hyphen_fn = j.to_hyphen_be_hyphen_fn, to_hyphen_be_hyphen_nbr = j.to_hyphen_be_hyphen_nbr, to_hyphen_be_hyphen_array = j.to_hyphen_be_hyphen_array, to_hyphen_have_hyphen_length = j.to_hyphen_have_hyphen_length, test_hyphen_predicate = j.test_hyphen_predicate, test_hyphen_transformation = j.test_hyphen_transformation, test_hyphen_throwing_hyphen_transformation = j.test_hyphen_throwing_hyphen_transformation, gen_hyphen_pred_hyphen_guards = j.gen_hyphen_pred_hyphen_guards;
    return descr('test stepper.cough')(function() {
      return t('test st.getBasicPotentialMoves')(function() {
        var bd1, bd2, bd3, fn, local_hyphen_pos, potential_hyphen_moves, potential_hyphen_moves2, potential_hyphen_moves3;
        fn = st.getBasicPotentialMoves;
        local_hyphen_pos = g.generate_hyphen_position(3, 3);
        bd1 = '---------------------------n------------------------------------';
        potential_hyphen_moves = [[4, 5], [4, 1], [2, 5], [2, 1], [5, 4], [5, 2], [1, 4], [1, 2]];
        to_hyphen_equal(potential_hyphen_moves)(fn(bd1, local_hyphen_pos, c.knight));
        bd2 = '----------p-p----p---p-----n------------------------------------';
        potential_hyphen_moves2 = [[4, 5], [4, 1], [5, 4], [5, 2]];
        to_hyphen_equal(potential_hyphen_moves2)(fn(bd2, local_hyphen_pos, c.knight));
        bd3 = '---------------------------K------------------------------------';
        potential_hyphen_moves3 = [[4, 4], [4, 3], [4, 2], [3, 4], [3, 2], [2, 4], [2, 3], [2, 2]];
        return to_hyphen_equal(potential_hyphen_moves3)(fn(bd3, local_hyphen_pos, c.king));
      });
    });
  });

}).call(this);