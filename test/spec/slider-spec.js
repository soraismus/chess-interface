// Generated by CoughSyrup 0.1.0
(function() {
  define(['mydash', 'jFns', 'specConstants', 'constants', 'constructors', 'utilities', 'slider'], function(_, j, sc, c, g, u, sl) {
    var contravenes, descr, each_hyphen_contravenes, each_hyphen_fn_hyphen_result_hyphen_equals, each_hyphen_satisfies, each_hyphen_throws, gen_hyphen_pred_hyphen_guards, satisfies, t, test_hyphen_predicate, test_hyphen_spec, test_hyphen_throwing_hyphen_transformation, test_hyphen_transformation, throws, to_hyphen_be, to_hyphen_be_hyphen_array, to_hyphen_be_hyphen_false, to_hyphen_be_hyphen_fn, to_hyphen_be_hyphen_nbr, to_hyphen_be_hyphen_true, to_hyphen_equal, to_hyphen_have_hyphen_length, to_hyphen_throw, xdescr, xt;
    descr = j.descr, xdescr = j.xdescr, t = j.t, xt = j.xt, test_hyphen_spec = j.test_hyphen_spec, to_hyphen_throw = j.to_hyphen_throw, to_hyphen_be = j.to_hyphen_be, to_hyphen_equal = j.to_hyphen_equal, to_hyphen_be_hyphen_true = j.to_hyphen_be_hyphen_true, to_hyphen_be_hyphen_false = j.to_hyphen_be_hyphen_false, satisfies = j.satisfies, contravenes = j.contravenes, throws = j.throws, each_hyphen_fn_hyphen_result_hyphen_equals = j.each_hyphen_fn_hyphen_result_hyphen_equals, each_hyphen_satisfies = j.each_hyphen_satisfies, each_hyphen_contravenes = j.each_hyphen_contravenes, each_hyphen_throws = j.each_hyphen_throws, to_hyphen_be_hyphen_array = j.to_hyphen_be_hyphen_array, to_hyphen_be_hyphen_fn = j.to_hyphen_be_hyphen_fn, to_hyphen_be_hyphen_nbr = j.to_hyphen_be_hyphen_nbr, to_hyphen_be_hyphen_array = j.to_hyphen_be_hyphen_array, to_hyphen_have_hyphen_length = j.to_hyphen_have_hyphen_length, test_hyphen_predicate = j.test_hyphen_predicate, test_hyphen_transformation = j.test_hyphen_transformation, test_hyphen_throwing_hyphen_transformation = j.test_hyphen_throwing_hyphen_transformation, gen_hyphen_pred_hyphen_guards = j.gen_hyphen_pred_hyphen_guards;
    return descr('test slider.cough')(function() {
      var gen_hyphen_pos, initial_hyphen_board, pos2;
      gen_hyphen_pos = g.generate_hyphen_position;
      pos2 = gen_hyphen_pos(7, 5);
      initial_hyphen_board = sc.initial_hyphen_board;
      t('test sl.getPotentialMoves')(function() {
        var bd1, bd2, bd3, bd4, bd5, fn, local_hyphen_pos, offsets1, offsets2, offsets3, offsets4, offsets5;
        fn = sl.getPotentialMoves;
        local_hyphen_pos = g.generate_hyphen_position(0, 0);
        bd1 = 'rn--------------------------------------------------------------';
        offsets1 = [[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0]];
        to_hyphen_equal(offsets1)(fn(bd1, local_hyphen_pos, void 0, void 0, c.rook));
        bd2 = 'rN--------------------------------------------------------------';
        offsets2 = [[1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [0, 1]];
        to_hyphen_equal(offsets2)(fn(bd2, local_hyphen_pos, void 0, void 0, c.rook));
        bd3 = 'r-------n-------------------------------------------------------';
        offsets3 = [[0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6], [0, 7]];
        to_hyphen_equal(offsets3)(fn(bd3, local_hyphen_pos, void 0, void 0, c.rook));
        bd4 = 'q-n------------------------n------------------------------------';
        offsets4 = [[1, 1], [2, 2], [1, 0], [2, 0], [3, 0], [4, 0], [5, 0], [6, 0], [7, 0], [0, 1]];
        to_hyphen_equal(offsets4)(fn(bd4, local_hyphen_pos, void 0, void 0, c.queen));
        bd5 = '------------------------------------n--------------------------B';
        offsets5 = [[6, 6], [5, 5], [4, 4]];
        return to_hyphen_equal(offsets5)(fn(bd5, gen_hyphen_pos(7, 7), void 0, void 0, c.bishop));
      });
      t('test sl.getPotentialKingAttacks')(function() {});
      t('test sl.modifyCastlingRights')(function() {
        var fn;
        fn = sl.modifyCastlingRights;
        to_hyphen_equal(c.full_hyphen_castling_hyphen_rts)(fn(c.full_hyphen_castling_hyphen_rts));
        return to_hyphen_equal(c.no_hyphen_castling_hyphen_rts)(fn(c.no_hyphen_castling_hyphen_rts));
      });
      t('test sl.move')(function() {
        var fn, res;
        fn = sl.move;
        res = 'rnbqkbnrppppp-pp--------------------------------PPPPPPPPRNBQKpNR';
        return to_hyphen_equal(res)(fn(initial_hyphen_board, gen_hyphen_pos(1, 5))(pos2));
      });
      t('test sl.setPassantPosition')(function() {
        var fn;
        fn = sl.setPassantPosition;
        return to_hyphen_equal(c.unset_hyphen_passant_hyphen_pos)(fn());
      });
      return t('test sl.setPromotionPosition')(function() {
        var fn;
        fn = sl.setPromotionPosition;
        return to_hyphen_equal(c.unset_hyphen_promotion_hyphen_pos)(fn());
      });
    });
  });

}).call(this);
