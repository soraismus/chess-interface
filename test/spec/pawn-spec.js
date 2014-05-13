// Generated by CoughSyrup 0.1.0
(function() {
  define(['mydash', 'jFns', 'specConstants', 'constants', 'constructors', 'pawn'], function(_, j, sc, c, g, p) {
    var contravenes, descr, each_hyphen_contravenes, each_hyphen_fn_hyphen_result_hyphen_equals, each_hyphen_satisfies, each_hyphen_throws, gen_hyphen_pred_hyphen_guards, satisfies, t, test_hyphen_predicate, test_hyphen_spec, test_hyphen_throwing_hyphen_transformation, test_hyphen_transformation, throws, to_hyphen_be, to_hyphen_be_hyphen_array, to_hyphen_be_hyphen_false, to_hyphen_be_hyphen_fn, to_hyphen_be_hyphen_nbr, to_hyphen_be_hyphen_true, to_hyphen_equal, to_hyphen_have_hyphen_length, to_hyphen_throw, xdescr, xt;
    descr = j.descr, xdescr = j.xdescr, t = j.t, xt = j.xt, test_hyphen_spec = j.test_hyphen_spec, to_hyphen_throw = j.to_hyphen_throw, to_hyphen_be = j.to_hyphen_be, to_hyphen_equal = j.to_hyphen_equal, to_hyphen_be_hyphen_true = j.to_hyphen_be_hyphen_true, to_hyphen_be_hyphen_false = j.to_hyphen_be_hyphen_false, satisfies = j.satisfies, contravenes = j.contravenes, throws = j.throws, each_hyphen_fn_hyphen_result_hyphen_equals = j.each_hyphen_fn_hyphen_result_hyphen_equals, each_hyphen_satisfies = j.each_hyphen_satisfies, each_hyphen_contravenes = j.each_hyphen_contravenes, each_hyphen_throws = j.each_hyphen_throws, to_hyphen_be_hyphen_array = j.to_hyphen_be_hyphen_array, to_hyphen_be_hyphen_fn = j.to_hyphen_be_hyphen_fn, to_hyphen_be_hyphen_nbr = j.to_hyphen_be_hyphen_nbr, to_hyphen_be_hyphen_array = j.to_hyphen_be_hyphen_array, to_hyphen_have_hyphen_length = j.to_hyphen_have_hyphen_length, test_hyphen_predicate = j.test_hyphen_predicate, test_hyphen_transformation = j.test_hyphen_transformation, test_hyphen_throwing_hyphen_transformation = j.test_hyphen_throwing_hyphen_transformation, gen_hyphen_pred_hyphen_guards = j.gen_hyphen_pred_hyphen_guards;
    return descr('test pawn.cough')(function() {
      var bd, chart1, chart2, chart2_1, ctx, initial_hyphen_board, invalid_hyphen_chessman, invalid_hyphen_pos, map, passant, path, pos1, pos2, rts, setting, src, tgt;
      bd = sc.boards[0];
      chart1 = sc.charts[0];
      chart2 = sc.charts[1];
      chart2_1 = sc.chart2s[0];
      ctx = sc.contexts[0];
      map = sc.maps[0];
      passant = sc.passant_hyphen_positions[0];
      path = sc.paths[0];
      pos1 = sc.positions[0];
      pos2 = sc.positions[1];
      initial_hyphen_board = sc.initial_hyphen_board;
      invalid_hyphen_chessman = sc.invalid_hyphen_chessmen[0];
      invalid_hyphen_pos = sc.invalid_hyphen_positions[0];
      rts = sc.castling_hyphen_rights[0];
      setting = sc.settings[0];
      src = sc.positions[0];
      tgt = sc.positions[1];
      descr('p.getPotentialKingAttacks')(function() {
        var bd1, bd2, fn, local_hyphen_pos, res1, res2;
        fn = p.getPotentialKingAttacks;
        local_hyphen_pos = g.generate_hyphen_position(1, 1);
        bd1 = '---------p------------------------------------------------------';
        res1 = [g.generate_hyphen_position(2, 0), g.generate_hyphen_position(2, 2)];
        to_hyphen_equal(res1)(fn(bd1)(local_hyphen_pos));
        bd2 = '---------P------------------------------------------------------';
        res2 = [g.generate_hyphen_position(0, 0), g.generate_hyphen_position(0, 2)];
        return to_hyphen_equal(res2)(fn(bd2)(local_hyphen_pos));
      });
      descr('p.getPotentialMoves')(function() {
        var fn;
        fn = p.getPotentialMoves;
        t('when a pawn is on its home rank')(function() {
          var local_hyphen_chart1, potential_hyphen_mvs1;
          local_hyphen_chart1 = g.generate_hyphen_chart2({
            board: initial_hyphen_board,
            source: g.generate_hyphen_position(1, 4),
            castlingRights: c.no_hyphen_castling_hyphen_rts,
            passantPosition: c.unset_hyphen_passant_hyphen_pos
          });
          potential_hyphen_mvs1 = [g.generate_hyphen_position(2, 4), g.generate_hyphen_position(3, 4)];
          return to_hyphen_equal(potential_hyphen_mvs1)(fn(local_hyphen_chart1));
        });
        t('when a pawn is not on its home rank')(function() {
          var bd2, local_hyphen_chart2, potential_hyphen_mvs2;
          bd2 = 'rnbqkbnrpppp-ppp------------p------P------------PPP-PPPPRNBQKBNR';
          local_hyphen_chart2 = g.generate_hyphen_chart2({
            board: bd2,
            source: g.generate_hyphen_position(3, 4),
            castlingRights: c.no_hyphen_castling_hyphen_rts,
            passantPosition: c.unset_hyphen_passant_hyphen_pos
          });
          potential_hyphen_mvs2 = [g.generate_hyphen_position(4, 4), g.generate_hyphen_position(4, 3)];
          return to_hyphen_equal(potential_hyphen_mvs2)(fn(local_hyphen_chart2));
        });
        return t('when the "passantPosition" field is set')(function() {
          var bd3, local_hyphen_chart3, potential_hyphen_mvs3;
          bd3 = 'rnbqkbnrpppp-ppp-------------------Pp-----------PPP-PPPPRNBQKBNR';
          local_hyphen_chart3 = g.generate_hyphen_chart2({
            board: bd3,
            source: g.generate_hyphen_position(4, 4),
            castlingRights: c.no_hyphen_castling_hyphen_rts,
            passantPosition: g.generate_hyphen_position(5, 3)
          });
          potential_hyphen_mvs3 = [g.generate_hyphen_position(5, 4), g.generate_hyphen_position(5, 3)];
          return to_hyphen_equal(potential_hyphen_mvs3)(fn(local_hyphen_chart3));
        });
      });
      t('test p.modifyCastlingRights')(function() {
        var chart3, chart4, fn;
        fn = p.modifyCastlingRights;
        chart3 = sc.chart2s[0];
        chart4 = sc.chart2s[2];
        to_hyphen_equal(c.full_hyphen_castling_hyphen_rts)(fn(chart3));
        return to_hyphen_equal(c.no_hyphen_castling_hyphen_rts)(fn(chart4));
      });
      t('test p.move')(function() {
        var chart2_2, fn, res2, result, tgt2;
        fn = p.move;
        result = 'rnbqkbnrppppp-pp--------------------------------PPPPPPPPRNBQKpNR';
        to_hyphen_equal(result)(fn(chart2_1)(pos2));
        chart2_2 = sc.chart2s[3];
        tgt2 = sc.positions[4];
        res2 = 'rnbqkbnr-ppppppp-------------------------p------P-PPPPPPRNBQKBNR';
        return to_hyphen_equal(res2)(fn(chart2_2)(tgt2));
      });
      t('test p.setPassantPosition')(function() {
        var expected_hyphen_passant, fn, local_hyphen_chart2, tgt2;
        fn = p.setPassantPosition;
        src = g.generate_hyphen_position(1, 4);
        tgt = g.generate_hyphen_position(3, 4);
        tgt2 = expected_hyphen_passant = g.generate_hyphen_position(2, 4);
        local_hyphen_chart2 = g.generate_hyphen_chart2({
          board: initial_hyphen_board,
          source: src,
          castlingRights: c.no_hyphen_castling_hyphen_rts,
          passantPosition: c.unset_hyphen_passant_hyphen_pos
        });
        to_hyphen_equal(expected_hyphen_passant)(fn(local_hyphen_chart2, tgt));
        return to_hyphen_equal(c.unset_hyphen_passant_hyphen_pos)(fn(local_hyphen_chart2, tgt2));
      });
      return descr('p.setPromotionPosition')(function() {
        var fn;
        fn = p.setPromotionPosition;
        t('when a pawn reaches the home rank of its opponents')(function() {
          var local_hyphen_board, local_hyphen_chart1;
          local_hyphen_board = 'rnbqkbnr-ppppppp--------------------------------pPPPPPPPRNBQKBN-';
          tgt = g.generate_hyphen_position(7, 0);
          local_hyphen_chart1 = g.generate_hyphen_chart2({
            board: local_hyphen_board,
            source: g.generate_hyphen_position(6, 0),
            castlingRights: c.no_hyphen_castling_hyphen_rts,
            passantPosition: c.unset_hyphen_passant_hyphen_pos
          });
          return to_hyphen_equal(tgt)(fn(local_hyphen_chart1, tgt));
        });
        return t('when a pawn does not reach its opponents\' home rank')(function() {
          var local_hyphen_board, local_hyphen_chart1;
          local_hyphen_board = 'rnbqkbnr-ppppppp-------------------------p-------PPPPPPPRNBQKBN-';
          tgt = g.generate_hyphen_position(6, 0);
          local_hyphen_chart1 = g.generate_hyphen_chart2({
            board: local_hyphen_board,
            source: g.generate_hyphen_position(5, 0),
            castlingRights: c.no_hyphen_castling_hyphen_rts,
            passantPosition: c.unset_hyphen_passant_hyphen_pos
          });
          return to_hyphen_equal(c.unset_hyphen_promotion_hyphen_pos)(fn(local_hyphen_chart1, tgt));
        });
      });
    });
  });

}).call(this);
