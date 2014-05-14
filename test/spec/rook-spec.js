// Generated by CoughSyrup 0.1.0
(function() {
  define(['mydash', 'jFns', 'specConstants', 'constants', 'constructors', 'utilities', 'rook'], function(_, j, sc, c, g, u, r) {
    var contravenes, descr, each_hyphen_contravenes, each_hyphen_fn_hyphen_result_hyphen_equals, each_hyphen_satisfies, each_hyphen_throws, gen_hyphen_pred_hyphen_guards, satisfies, t, test_hyphen_predicate, test_hyphen_spec, test_hyphen_throwing_hyphen_transformation, test_hyphen_transformation, throws, to_hyphen_be, to_hyphen_be_hyphen_array, to_hyphen_be_hyphen_false, to_hyphen_be_hyphen_fn, to_hyphen_be_hyphen_nbr, to_hyphen_be_hyphen_true, to_hyphen_equal, to_hyphen_have_hyphen_length, to_hyphen_throw, xdescr, xt;
    descr = j.descr, xdescr = j.xdescr, t = j.t, xt = j.xt, test_hyphen_spec = j.test_hyphen_spec, to_hyphen_throw = j.to_hyphen_throw, to_hyphen_be = j.to_hyphen_be, to_hyphen_equal = j.to_hyphen_equal, to_hyphen_be_hyphen_true = j.to_hyphen_be_hyphen_true, to_hyphen_be_hyphen_false = j.to_hyphen_be_hyphen_false, satisfies = j.satisfies, contravenes = j.contravenes, throws = j.throws, each_hyphen_fn_hyphen_result_hyphen_equals = j.each_hyphen_fn_hyphen_result_hyphen_equals, each_hyphen_satisfies = j.each_hyphen_satisfies, each_hyphen_contravenes = j.each_hyphen_contravenes, each_hyphen_throws = j.each_hyphen_throws, to_hyphen_be_hyphen_array = j.to_hyphen_be_hyphen_array, to_hyphen_be_hyphen_fn = j.to_hyphen_be_hyphen_fn, to_hyphen_be_hyphen_nbr = j.to_hyphen_be_hyphen_nbr, to_hyphen_be_hyphen_array = j.to_hyphen_be_hyphen_array, to_hyphen_have_hyphen_length = j.to_hyphen_have_hyphen_length, test_hyphen_predicate = j.test_hyphen_predicate, test_hyphen_transformation = j.test_hyphen_transformation, test_hyphen_throwing_hyphen_transformation = j.test_hyphen_throwing_hyphen_transformation, gen_hyphen_pred_hyphen_guards = j.gen_hyphen_pred_hyphen_guards;
    return descr('test rook.cough')(function() {
      var gen_hyphen_pos, initial_hyphen_board, pos2;
      gen_hyphen_pos = g.generate_hyphen_position;
      pos2 = gen_hyphen_pos(7, 5);
      initial_hyphen_board = sc.initial_hyphen_board;
      t('test r.getPotentialMoves2')(function() {
        var bd1, bd2, bd3, fn, local_hyphen_pos, offsets1, offsets2, offsets3;
        fn = r.getPotentialMoves2;
        local_hyphen_pos = g.generate_hyphen_position(0, 0);
        bd1 = 'rn--------------------------------------------------------------';
        offsets1 = [[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0]];
        to_hyphen_equal(offsets1)(fn(bd1, local_hyphen_pos));
        bd2 = 'rN--------------------------------------------------------------';
        offsets2 = [[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [0, 1]];
        to_hyphen_equal(offsets2)(fn(bd2, local_hyphen_pos));
        bd3 = 'r-------n-------------------------------------------------------';
        offsets3 = [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7]];
        return to_hyphen_equal(offsets3)(fn(bd3, local_hyphen_pos));
      });
      t('test r.getPotentialKingAttacks2')(function() {
        var bd1, fn, offsets1;
        fn = r.getPotentialKingAttacks2;
        bd1 = 'rN--------------------------------------------------------------';
        offsets1 = [[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [0, 1]];
        return to_hyphen_equal(offsets1)(fn(bd1, gen_hyphen_pos(0, 0)));
      });
      t('test r.modifyCastlingRights2')(function() {
        var fn;
        fn = r.modifyCastlingRights2;
        to_hyphen_equal('KQk')(fn('KQkq', gen_hyphen_pos(0, 0)));
        to_hyphen_equal('q')(fn('kq', gen_hyphen_pos(0, 7)));
        to_hyphen_equal('-')(fn('-', gen_hyphen_pos(7, 0)));
        return to_hyphen_equal('q')(fn('Kq', gen_hyphen_pos(7, 7)));
      });
      t('test r.move2')(function() {
        var fn, res;
        fn = r.move2;
        res = 'rnbqkbnrppppp-pp--------------------------------PPPPPPPPRNBQKpNR';
        return to_hyphen_equal(res)(fn(initial_hyphen_board, gen_hyphen_pos(1, 5))(pos2));
      });
      t('test r.setPassantPosition2')(function() {
        var fn;
        fn = r.setPassantPosition2;
        return to_hyphen_equal(c.unset_hyphen_passant_hyphen_pos)(fn());
      });
      return t('test r.setPromotionPosition2')(function() {
        var fn;
        fn = r.setPromotionPosition2;
        return to_hyphen_equal(c.unset_hyphen_promotion_hyphen_pos)(fn());
      });
    });
  });

}).call(this);
