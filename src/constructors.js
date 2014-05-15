// Generated by CoughSyrup 0.1.0
(function() {
  define(['base-helpers', 'constants', 'types', 'assertions'], function(_, c, y, v) {
    var black_hyphen_chessman_hyphen_from, generate_hyphen_chart, generate_hyphen_chart2, generate_hyphen_chessman, generate_hyphen_context, generate_hyphen_map, generate_hyphen_path, generate_hyphen_position, generate_hyphen_position_bang_, generate_hyphen_setting;
    black_hyphen_chessman_hyphen_from = {};
    black_hyphen_chessman_hyphen_from[c.king] = c.black_hyphen_king;
    black_hyphen_chessman_hyphen_from[c.queen] = c.black_hyphen_queen;
    black_hyphen_chessman_hyphen_from[c.rook] = c.black_hyphen_rook;
    black_hyphen_chessman_hyphen_from[c.bishop] = c.black_hyphen_bishop;
    black_hyphen_chessman_hyphen_from[c.knight] = c.black_hyphen_knight;
    black_hyphen_chessman_hyphen_from[c.pawn] = c.black_hyphen_pawn;
    generate_hyphen_chart = function(context, path) {
      v.vow_hyphen_context(context);
      v.vow_hyphen_path(path);
      return [context, path];
    };
    generate_hyphen_chart2 = function(conf) {
      v.vow_hyphen_chart2(conf);
      return conf;
    };
    generate_hyphen_chessman = function(chessman_hyphen_type, color) {
      var black_hyphen_chessman;
      v.vow_hyphen_chessman_hyphen_type(chessman_hyphen_type);
      v.vow_hyphen_color(color);
      black_hyphen_chessman = black_hyphen_chessman_hyphen_from[chessman_hyphen_type];
      if (y.black_question_(color)) {
        return black_hyphen_chessman;
      } else {
        return _.toUC(black_hyphen_chessman);
      }
    };
    generate_hyphen_context = function(board, rts, passant) {
      v.vow_hyphen_board(board);
      v.vow_hyphen_castling_hyphen_right_hyphen_set(rts);
      v.vow_hyphen_passant_hyphen_position(passant);
      return {
        board: board,
        castlingRights: rts,
        passantPosition: passant
      };
    };
    generate_hyphen_map = function(board, path) {
      v.vow_hyphen_board(board);
      v.vow_hyphen_path(path);
      return [board, path];
    };
    generate_hyphen_path = function(src, tgt) {
      v.vow_hyphen_all_hyphen_positions([src, tgt]);
      return [tgt, src];
    };
    generate_hyphen_position = function(rank, file) {
      v.vow_hyphen_position([rank, file]);
      return generate_hyphen_position_bang_(rank, file);
    };
    generate_hyphen_position_bang_ = function(rank, file) {
      return [rank, file];
    };
    generate_hyphen_setting = function(board, pos) {
      v.vow_hyphen_board(board);
      v.vow_hyphen_position(pos);
      return [board, pos];
    };
    return {
      generate_hyphen_chart: generate_hyphen_chart,
      generate_hyphen_chart2: generate_hyphen_chart2,
      generate_hyphen_chessman: generate_hyphen_chessman,
      generate_hyphen_context: generate_hyphen_context,
      generate_hyphen_map: generate_hyphen_map,
      generate_hyphen_path: generate_hyphen_path,
      generate_hyphen_position: generate_hyphen_position,
      generate_hyphen_position_bang_: generate_hyphen_position_bang_,
      generate_hyphen_setting: generate_hyphen_setting
    };
  });

}).call(this);
