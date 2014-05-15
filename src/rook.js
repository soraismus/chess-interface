// Generated by CoughSyrup 0.1.0
(function() {
  define(['base-helpers', 'constants', 'extractors', 'slider', 'assertions'], function(_, c, x, slider_hyphen_fns, v) {
    var K, KQ, KQk, KQq, Kk, Kkq, Kq, NO, Q, Qk, Qkq, Qq, k, kingside_question_, kq, modifyCastlingRights, new_hyphen_castling_hyphen_rts, pf, public_hyphen_fns, q, which_hyphen_side_question_;
    KQk = 'KQk';
    KQq = 'KQq';
    Kkq = 'Kkq';
    Qkq = 'Qkq';
    KQ = 'KQ';
    Kk = 'Kk';
    Kq = 'Kq';
    Qk = 'Qk';
    Qq = 'Qq';
    kq = 'kq';
    K = 'K';
    Q = 'Q';
    k = 'k';
    q = 'q';
    NO = '-';
    new_hyphen_castling_hyphen_rts = {};
    new_hyphen_castling_hyphen_rts[c.white] = {
      kingside: {
        KQkq: Qkq,
        KQk: Qk,
        KQq: Qq,
        KQ: Q,
        Kkq: kq,
        Kk: k,
        Kq: q,
        K: NO,
        Qkq: Qkq,
        Qk: Qk,
        Qq: Qq,
        Q: Q,
        kq: kq,
        k: k,
        q: q,
        '-': NO
      },
      queenside: {
        KQkq: Kkq,
        KQk: Kk,
        KQq: Kq,
        KQ: K,
        Kkq: Kkq,
        Kk: Kk,
        Kq: Kq,
        K: K,
        Qkq: kq,
        Qk: k,
        Qq: q,
        Q: NO,
        kq: kq,
        k: k,
        q: q,
        '-': NO
      }
    };
    new_hyphen_castling_hyphen_rts[c.black] = {
      kingside: {
        KQkq: KQq,
        Qkq: Qq,
        Kkq: Kq,
        kq: q,
        KQq: KQq,
        Qq: Qq,
        Kq: Kq,
        q: q,
        KQk: KQ,
        Qk: Q,
        Kk: K,
        k: NO,
        KQ: KQ,
        Q: Q,
        K: K,
        '-': NO
      },
      queenside: {
        KQkq: KQk,
        Qkq: Qk,
        Kkq: Kk,
        kq: k,
        KQk: KQk,
        Qk: Qk,
        Kk: Kk,
        k: k,
        KQq: KQ,
        Qq: Q,
        Kq: K,
        q: NO,
        KQ: KQ,
        Q: Q,
        K: K,
        '-': NO
      }
    };
    kingside_question_ = function(src) {
      return x.file_hyphen_of(src) >= 4;
    };
    modifyCastlingRights = function(rts, src) {
      var rook_hyphen_color, side, src_hyphen_file, src_hyphen_rank, _ref;
      v.vow_hyphen_castling_hyphen_right_hyphen_set(rts);
      v.vow_hyphen_position(src);
      _ref = x.rank_hyphen__ampersand__hyphen_file_hyphen_from(src), src_hyphen_rank = _ref[0], src_hyphen_file = _ref[1];
      rook_hyphen_color = src_hyphen_rank === 0 ? c.black : c.white;
      side = which_hyphen_side_question_(src);
      return new_hyphen_castling_hyphen_rts[rook_hyphen_color][side][rts];
    };
    which_hyphen_side_question_ = function(src) {
      if (kingside_question_(src)) {
        return 'kingside';
      } else {
        return 'queenside';
      }
    };
    pf = public_hyphen_fns = _.defaults({
      modifyCastlingRights: modifyCastlingRights
    }, slider_hyphen_fns);
    pf.getPotentialMoves = (function(getPotentialMoves) {
      return function(bd, src) {
        v.vow_hyphen_board(bd);
        v.vow_hyphen_position(src);
        return getPotentialMoves(bd, src, void 0, void 0, c.rook);
      };
    })(pf.getPotentialMoves);
    pf.getPotentialKingAttacks = (function(getPotentialKingAttacks) {
      return function(bd, src) {
        v.vow_hyphen_board(bd);
        v.vow_hyphen_position(src);
        return getPotentialKingAttacks(bd, src, void 0, c.rook);
      };
    })(pf.getPotentialKingAttacks);
    return public_hyphen_fns;
  });

}).call(this);
