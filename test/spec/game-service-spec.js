// Generated by CoughSyrup 0.1.0
(function() {
  define(['mydash', 'jFns', 'specConstants', 'constants', 'constructors', 'game-service'], function(_, j, sc, c, g, gs) {
    var contravenes, descr, each_hyphen_contravenes, each_hyphen_fn_hyphen_result_hyphen_equals, each_hyphen_satisfies, each_hyphen_throws, gen_hyphen_pred_hyphen_guards, satisfies, t, test_hyphen_predicate, test_hyphen_spec, test_hyphen_throwing_hyphen_transformation, test_hyphen_transformation, throws, to_hyphen_be, to_hyphen_be_hyphen_array, to_hyphen_be_hyphen_false, to_hyphen_be_hyphen_fn, to_hyphen_be_hyphen_nbr, to_hyphen_be_hyphen_true, to_hyphen_equal, to_hyphen_have_hyphen_length, to_hyphen_throw, xdescr, xt;
    descr = j.descr, xdescr = j.xdescr, t = j.t, xt = j.xt, test_hyphen_spec = j.test_hyphen_spec, to_hyphen_throw = j.to_hyphen_throw, to_hyphen_be = j.to_hyphen_be, to_hyphen_equal = j.to_hyphen_equal, to_hyphen_be_hyphen_true = j.to_hyphen_be_hyphen_true, to_hyphen_be_hyphen_false = j.to_hyphen_be_hyphen_false, satisfies = j.satisfies, contravenes = j.contravenes, throws = j.throws, each_hyphen_fn_hyphen_result_hyphen_equals = j.each_hyphen_fn_hyphen_result_hyphen_equals, each_hyphen_satisfies = j.each_hyphen_satisfies, each_hyphen_contravenes = j.each_hyphen_contravenes, each_hyphen_throws = j.each_hyphen_throws, to_hyphen_be_hyphen_array = j.to_hyphen_be_hyphen_array, to_hyphen_be_hyphen_fn = j.to_hyphen_be_hyphen_fn, to_hyphen_be_hyphen_nbr = j.to_hyphen_be_hyphen_nbr, to_hyphen_be_hyphen_array = j.to_hyphen_be_hyphen_array, to_hyphen_have_hyphen_length = j.to_hyphen_have_hyphen_length, test_hyphen_predicate = j.test_hyphen_predicate, test_hyphen_transformation = j.test_hyphen_transformation, test_hyphen_throwing_hyphen_transformation = j.test_hyphen_throwing_hyphen_transformation, gen_hyphen_pred_hyphen_guards = j.gen_hyphen_pred_hyphen_guards;
    return descr('test game-service.cough')(function() {
      var Kkq, bd1, bd10, bd11, bd12, bd2, bd3, bd4, bd5, bd6, bd7, bd8, bd9, chart1, chart4, chart5, gen_hyphen_chart, gen_hyphen_chart2, gen_hyphen_pos, pos0_hyphen_0, pos0_hyphen_3, pos0_hyphen_4, pos1_hyphen_4, pos2_hyphen_3, pos2_hyphen_4, pos2_hyphen_6, pos3_hyphen_4, pos5_hyphen_1, pos5_hyphen_2, pos7_hyphen_1, pos7_hyphen_3, pos7_hyphen_4, pos7_hyphen_6;
      gen_hyphen_pos = g.generate_hyphen_position;
      gen_hyphen_chart2 = g.generate_hyphen_chart2;
      bd1 = sc.initial_hyphen_board;
      bd2 = '---q-------------------------------------------------------K----';
      bd3 = '----k-------------------------------------------------------K---';
      bd4 = '--------P---------------------------------------p--------N------';
      bd5 = 'r---k--r------------------------------------------------R---K--R';
      bd6 = '--kr---r------------------------------------------------R---K--R';
      bd7 = 'r----rk-------------------------------------------------R---K--R';
      bd8 = 'r---k--r--------------------------------------------------KR---R';
      bd9 = 'r---k--r------------------------------------------------R----RK-';
      bd10 = '------------------------------pPpP------------------------------';
      bd11 = '------------------------------pP---------p----------------------';
      bd12 = '----------------------P---------pP------------------------------';
      pos0_hyphen_0 = gen_hyphen_pos(0, 0);
      pos0_hyphen_3 = gen_hyphen_pos(0, 3);
      pos0_hyphen_4 = gen_hyphen_pos(0, 4);
      pos1_hyphen_4 = gen_hyphen_pos(1, 4);
      pos2_hyphen_3 = gen_hyphen_pos(2, 3);
      pos2_hyphen_4 = gen_hyphen_pos(2, 4);
      pos2_hyphen_6 = gen_hyphen_pos(2, 6);
      pos3_hyphen_4 = gen_hyphen_pos(3, 4);
      pos5_hyphen_1 = gen_hyphen_pos(5, 1);
      pos5_hyphen_2 = gen_hyphen_pos(5, 2);
      pos7_hyphen_1 = gen_hyphen_pos(7, 1);
      pos7_hyphen_3 = gen_hyphen_pos(7, 3);
      pos7_hyphen_4 = gen_hyphen_pos(7, 4);
      pos7_hyphen_6 = gen_hyphen_pos(7, 6);
      Kkq = 'Kkq';
      gen_hyphen_chart = function(board, pos) {
        return gen_hyphen_chart2({
          board: board,
          source: pos,
          castlingRights: c.no_hyphen_castling_hyphen_rts,
          passantPosition: c.unset_hyphen_passant_hyphen_pos
        });
      };
      chart1 = gen_hyphen_chart(bd1, pos1_hyphen_4);
      chart4 = gen_hyphen_chart(bd2, pos0_hyphen_3);
      chart5 = gen_hyphen_chart2({
        board: bd1,
        source: pos0_hyphen_3,
        castlingRights: Kkq,
        passantPosition: c.unset_hyphen_passant_hyphen_pos
      });
      t('test gs.getPotentialKingAttacks')(function() {
        var fn, res1, res2;
        fn = gs.getPotentialKingAttacks;
        res1 = [gen_hyphen_pos(2, 3), gen_hyphen_pos(2, 5)];
        to_hyphen_equal(res1)(fn(bd1)(pos1_hyphen_4));
        res2 = [gen_hyphen_pos(6, 3), gen_hyphen_pos(5, 2), gen_hyphen_pos(5, 0)];
        return to_hyphen_equal(res2)(fn(bd1)(pos7_hyphen_1));
      });
      t('test gs.getPotentialMoves')(function() {
        var fn, res1;
        fn = gs.getPotentialMoves;
        res1 = [gen_hyphen_pos(1, 4), gen_hyphen_pos(2, 5), gen_hyphen_pos(3, 6), gen_hyphen_pos(4, 7), gen_hyphen_pos(1, 3), gen_hyphen_pos(2, 3), gen_hyphen_pos(3, 3), gen_hyphen_pos(4, 3), gen_hyphen_pos(5, 3), gen_hyphen_pos(6, 3), gen_hyphen_pos(7, 3), gen_hyphen_pos(1, 2), gen_hyphen_pos(2, 1), gen_hyphen_pos(3, 0), gen_hyphen_pos(0, 4), gen_hyphen_pos(0, 5), gen_hyphen_pos(0, 6), gen_hyphen_pos(0, 7), gen_hyphen_pos(0, 2), gen_hyphen_pos(0, 1), gen_hyphen_pos(0, 0)];
        return to_hyphen_equal(res1)(fn(c.queen, chart4));
      });
      t('test gs.king-position')(function() {
        var fn;
        fn = gs.king_hyphen_position;
        to_hyphen_equal(pos0_hyphen_4)(fn(c.black)(bd3));
        to_hyphen_equal(pos7_hyphen_4)(fn(c.white)(bd3));
        return to_hyphen_equal(pos7_hyphen_6)(fn(c.white)(bd9));
      });
      t('test gs.modifyCastlingRights')(function() {
        var chart6, chart7, fn;
        fn = gs.modifyCastlingRights;
        to_hyphen_equal(Kkq)(fn(chart5));
        chart6 = gen_hyphen_chart2({
          board: bd3,
          source: gen_hyphen_pos(0, 4),
          castlingRights: Kkq,
          passantPosition: c.unset_hyphen_passant_hyphen_pos
        });
        chart7 = gen_hyphen_chart2({
          board: bd3,
          source: gen_hyphen_pos(7, 4),
          castlingRights: Kkq,
          passantPosition: c.unset_hyphen_passant_hyphen_pos
        });
        return to_hyphen_equal('kq')(fn(chart7));
      });
      t('test gs.move')(function() {
        var chart11, chart12, chart13, chart14, fn;
        fn = gs.move;
        chart11 = gen_hyphen_chart(bd5, pos0_hyphen_4);
        to_hyphen_equal(bd6)(fn(chart11)(gen_hyphen_pos(0, 2)));
        to_hyphen_equal(bd7)(fn(chart11)(gen_hyphen_pos(0, 6)));
        chart12 = gen_hyphen_chart(bd5, pos7_hyphen_4);
        to_hyphen_equal(bd8)(fn(chart12)(gen_hyphen_pos(7, 2)));
        to_hyphen_equal(bd9)(fn(chart12)(pos7_hyphen_6));
        chart13 = g.generate_hyphen_chart2({
          board: bd10,
          source: gen_hyphen_pos(4, 0),
          castlingRights: c.no_hyphen_castling_hyphen_rts,
          passantPosition: pos5_hyphen_1
        });
        to_hyphen_equal(bd11)(fn(chart13)(pos5_hyphen_1));
        chart14 = g.generate_hyphen_chart2({
          board: bd10,
          source: gen_hyphen_pos(3, 7),
          castlingRights: c.no_hyphen_castling_hyphen_rts,
          passantPosition: pos2_hyphen_6
        });
        return to_hyphen_equal(bd12)(fn(chart14)(pos2_hyphen_6));
      });
      t('test gs.move-legal?')(function() {
        var chart2, chart3, fn;
        fn = gs.move_hyphen_legal_question_;
        chart2 = gen_hyphen_chart(bd1, pos7_hyphen_1);
        chart3 = gen_hyphen_chart(bd1, pos0_hyphen_3);
        to_hyphen_be_hyphen_true(fn(chart1, pos3_hyphen_4));
        to_hyphen_be_hyphen_false(fn(chart1, pos2_hyphen_3));
        to_hyphen_be_hyphen_true(fn(chart2, pos5_hyphen_2));
        to_hyphen_be_hyphen_false(fn(chart3, pos7_hyphen_3));
        return to_hyphen_be_hyphen_true(fn(chart4, pos7_hyphen_3));
      });
      t('test gs.setPassantPosition')(function() {
        var chart8, fn, to_hyphen_unset;
        fn = gs.setPassantPosition;
        to_hyphen_unset = to_hyphen_equal(c.unset_hyphen_passant_hyphen_pos);
        to_hyphen_unset(fn(chart1, pos2_hyphen_4));
        to_hyphen_unset(fn(chart4, pos0_hyphen_3));
        to_hyphen_unset(fn(chart5, pos0_hyphen_3));
        to_hyphen_equal(pos2_hyphen_4)(fn(chart1, pos3_hyphen_4));
        chart8 = gen_hyphen_chart(bd1, gen_hyphen_pos(6, 7));
        return to_hyphen_equal(gen_hyphen_pos(5, 7))(fn(chart8, gen_hyphen_pos(4, 7)));
      });
      return t('test setPromotionPosition')(function() {
        var chart10, chart9, fn, to_hyphen_unset;
        fn = gs.setPromotionPosition;
        to_hyphen_unset = to_hyphen_equal(c.unset_hyphen_promotion_hyphen_pos);
        to_hyphen_unset(fn(chart1, pos2_hyphen_4));
        to_hyphen_unset(fn(chart4, pos0_hyphen_3));
        to_hyphen_unset(fn(chart5, pos0_hyphen_3));
        chart9 = gen_hyphen_chart(bd4, gen_hyphen_pos(1, 0));
        to_hyphen_equal(pos0_hyphen_0)(fn(chart9, pos0_hyphen_0));
        chart10 = gen_hyphen_chart(bd4, gen_hyphen_pos(6, 0));
        return to_hyphen_equal(pos7_hyphen_1)(fn(chart10, pos7_hyphen_1));
      });
    });
  });

}).call(this);