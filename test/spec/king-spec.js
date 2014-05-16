// Generated by CoughSyrup 0.1.0
(function() {
  define(['jFns', 'constants', 'constructors', 'utilities', 'king'], function(j, c, g, u, k) {
    var contravenes, descr, each_hyphen_contravenes, each_hyphen_fn_hyphen_result_hyphen_equals, each_hyphen_satisfies, each_hyphen_throws, gen_hyphen_pred_hyphen_guards, satisfies, t, test_hyphen_predicate, test_hyphen_spec, test_hyphen_throwing_hyphen_transformation, test_hyphen_transformation, throws, to_hyphen_be, to_hyphen_be_hyphen_array, to_hyphen_be_hyphen_false, to_hyphen_be_hyphen_fn, to_hyphen_be_hyphen_nbr, to_hyphen_be_hyphen_true, to_hyphen_equal, to_hyphen_have_hyphen_length, to_hyphen_throw, xdescr, xt;
    descr = j.descr, xdescr = j.xdescr, t = j.t, xt = j.xt, test_hyphen_spec = j.test_hyphen_spec, to_hyphen_throw = j.to_hyphen_throw, to_hyphen_be = j.to_hyphen_be, to_hyphen_equal = j.to_hyphen_equal, to_hyphen_be_hyphen_true = j.to_hyphen_be_hyphen_true, to_hyphen_be_hyphen_false = j.to_hyphen_be_hyphen_false, satisfies = j.satisfies, contravenes = j.contravenes, throws = j.throws, each_hyphen_fn_hyphen_result_hyphen_equals = j.each_hyphen_fn_hyphen_result_hyphen_equals, each_hyphen_satisfies = j.each_hyphen_satisfies, each_hyphen_contravenes = j.each_hyphen_contravenes, each_hyphen_throws = j.each_hyphen_throws, to_hyphen_be_hyphen_array = j.to_hyphen_be_hyphen_array, to_hyphen_be_hyphen_fn = j.to_hyphen_be_hyphen_fn, to_hyphen_be_hyphen_nbr = j.to_hyphen_be_hyphen_nbr, to_hyphen_be_hyphen_array = j.to_hyphen_be_hyphen_array, to_hyphen_have_hyphen_length = j.to_hyphen_have_hyphen_length, test_hyphen_predicate = j.test_hyphen_predicate, test_hyphen_transformation = j.test_hyphen_transformation, test_hyphen_throwing_hyphen_transformation = j.test_hyphen_throwing_hyphen_transformation, gen_hyphen_pred_hyphen_guards = j.gen_hyphen_pred_hyphen_guards;
    return descr('test king.cough')(function() {
      var bd4, gen_hyphen_pos, pos3;
      gen_hyphen_pos = g.generate_hyphen_position;
      bd4 = '----kb-----Np---------------------------------------------------';
      pos3 = g.generate_hyphen_position(0, 4);
      t('test k.getPotentialKingAttacks')(function() {
        var fn, res;
        fn = k.getPotentialKingAttacks;
        res = [gen_hyphen_pos(1, 5), gen_hyphen_pos(1, 3), gen_hyphen_pos(0, 3)];
        return to_hyphen_equal(res)(fn(bd4, gen_hyphen_pos(0, 4), c.no_hyphen_castling_hyphen_rts));
      });
      t('test k.getPotentialMoves')(function() {
        var bd3, fn, results3, results4, results5;
        fn = k.getPotentialMoves;
        bd3 = '----k-----------------------------------------------------------';
        results3 = [[1, 5], [1, 4], [1, 3], [0, 5], [0, 3]];
        to_hyphen_equal(results3)(fn(bd3, pos3, c.no_hyphen_castling_hyphen_rts));
        results4 = [[1, 5], [1, 3], [0, 3]];
        to_hyphen_equal(results4)(fn(bd4, pos3, c.no_hyphen_castling_hyphen_rts));
        results5 = [[1, 5], [1, 4], [1, 3], [0, 5], [0, 3], [0, 2], [0, 6]];
        return to_hyphen_equal(results5)(fn(bd3, pos3, c.full_hyphen_castling_hyphen_rts));
      });
      t('test k.modifyCastlingRights')(function() {
        var fn;
        fn = k.modifyCastlingRights;
        to_hyphen_equal('KQ')(fn(c.full_hyphen_castling_hyphen_rts, pos3));
        return to_hyphen_equal(c.no_hyphen_castling_hyphen_rts)(fn('KQ', g.generate_hyphen_position(7, 4)));
      });
      t('test k.move')(function() {
        var bd1, bd2, bd5, fn, res1, res2, res5;
        fn = k.move;
        bd1 = 'r---k-----------------------------------------------------------';
        res1 = '--kr------------------------------------------------------------';
        to_hyphen_equal(res1)(fn(bd1, pos3)(gen_hyphen_pos(0, 2)));
        bd2 = 'r---k--r--------------------------------------------------------';
        res2 = 'r----rk---------------------------------------------------------';
        to_hyphen_equal(res2)(fn(bd2, pos3)(gen_hyphen_pos(0, 6)));
        bd5 = '------------------------------------------------------------K--R';
        res5 = '-------------------------------------------------------------RK-';
        return to_hyphen_equal(res5)(fn(bd5, gen_hyphen_pos(7, 4))(gen_hyphen_pos(7, 6)));
      });
      t('test k.setPassantPosition')(function() {
        var fn;
        fn = k.setPassantPosition;
        return to_hyphen_equal(c.unset_hyphen_passant_hyphen_pos)(fn());
      });
      return t('test k.setPromotionPosition')(function() {
        var fn;
        fn = k.setPromotionPosition;
        return to_hyphen_equal(c.unset_hyphen_promotion_hyphen_pos)(fn());
      });
    });
  });

}).call(this);
