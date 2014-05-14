// Generated by CoughSyrup 0.1.0
(function() {
  define(['mydash', 'jFns', 'specConstants', 'constants', 'constructors', 'piece'], function(_, j, sc, c, g, p) {
    var contravenes, descr, each_hyphen_contravenes, each_hyphen_fn_hyphen_result_hyphen_equals, each_hyphen_satisfies, each_hyphen_throws, gen_hyphen_pred_hyphen_guards, satisfies, t, test_hyphen_predicate, test_hyphen_spec, test_hyphen_throwing_hyphen_transformation, test_hyphen_transformation, throws, to_hyphen_be, to_hyphen_be_hyphen_array, to_hyphen_be_hyphen_false, to_hyphen_be_hyphen_fn, to_hyphen_be_hyphen_nbr, to_hyphen_be_hyphen_true, to_hyphen_equal, to_hyphen_have_hyphen_length, to_hyphen_throw, xdescr, xt;
    descr = j.descr, xdescr = j.xdescr, t = j.t, xt = j.xt, test_hyphen_spec = j.test_hyphen_spec, to_hyphen_throw = j.to_hyphen_throw, to_hyphen_be = j.to_hyphen_be, to_hyphen_equal = j.to_hyphen_equal, to_hyphen_be_hyphen_true = j.to_hyphen_be_hyphen_true, to_hyphen_be_hyphen_false = j.to_hyphen_be_hyphen_false, satisfies = j.satisfies, contravenes = j.contravenes, throws = j.throws, each_hyphen_fn_hyphen_result_hyphen_equals = j.each_hyphen_fn_hyphen_result_hyphen_equals, each_hyphen_satisfies = j.each_hyphen_satisfies, each_hyphen_contravenes = j.each_hyphen_contravenes, each_hyphen_throws = j.each_hyphen_throws, to_hyphen_be_hyphen_array = j.to_hyphen_be_hyphen_array, to_hyphen_be_hyphen_fn = j.to_hyphen_be_hyphen_fn, to_hyphen_be_hyphen_nbr = j.to_hyphen_be_hyphen_nbr, to_hyphen_be_hyphen_array = j.to_hyphen_be_hyphen_array, to_hyphen_have_hyphen_length = j.to_hyphen_have_hyphen_length, test_hyphen_predicate = j.test_hyphen_predicate, test_hyphen_transformation = j.test_hyphen_transformation, test_hyphen_throwing_hyphen_transformation = j.test_hyphen_throwing_hyphen_transformation, gen_hyphen_pred_hyphen_guards = j.gen_hyphen_pred_hyphen_guards;
    return descr('test piece.cough')(function() {
      var gen_hyphen_pos, initial_hyphen_board;
      gen_hyphen_pos = g.generate_hyphen_position;
      initial_hyphen_board = sc.initial_hyphen_board;
      t('test p.basicMove')(function() {
        var fn, res, src, tgt;
        fn = p.basicMove;
        src = gen_hyphen_pos(1, 5);
        tgt = gen_hyphen_pos(7, 5);
        res = 'rnbqkbnrppppp-pp--------------------------------PPPPPPPPRNBQKpNR';
        return to_hyphen_equal(res)(fn(initial_hyphen_board, src)(tgt));
      });
      t('test p.modifyCastlingRights')(function() {
        var fn;
        fn = p.modifyCastlingRights;
        to_hyphen_equal(c.full_hyphen_castling_hyphen_rts)(fn(c.full_hyphen_castling_hyphen_rts));
        return to_hyphen_equal(c.no_hyphen_castling_hyphen_rts)(fn(c.no_hyphen_castling_hyphen_rts));
      });
      t('test p.setPassantPosition')(function() {
        var fn;
        fn = p.setPassantPosition;
        return to_hyphen_equal(c.unset_hyphen_passant_hyphen_pos)(fn());
      });
      return t('test p.setPromotionPosition')(function() {
        var fn;
        fn = p.setPromotionPosition;
        return to_hyphen_equal(c.unset_hyphen_promotion_hyphen_pos)(fn());
      });
    });
  });

}).call(this);
