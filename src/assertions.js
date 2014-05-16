// Generated by CoughSyrup 0.1.0
(function() {
  define(['types'], function(y) {
    var generate_hyphen_plural_hyphen_validator, generate_hyphen_singular_hyphen_validator, plural_hyphen_validators, singular_hyphen_validators, unless_hyphen_undefined, validation_hyphen_pairs, vow, vow_hyphen_all_hyphen_passant_hyphen_positions, vow_hyphen_all_hyphen_position_hyphen_components, vow_hyphen_all_hyphen_positions, vow_hyphen_board, vow_hyphen_bounded, vow_hyphen_castling_hyphen_right, vow_hyphen_castling_hyphen_right_hyphen_set, vow_hyphen_chessman, vow_hyphen_chessman_hyphen_type, vow_hyphen_color, vow_hyphen_color_hyphen_pair, vow_hyphen_context, vow_hyphen_index, vow_hyphen_integral_hyphen_pair, vow_hyphen_message_hyphen_when_hyphen_set, vow_hyphen_pair, vow_hyphen_passant_hyphen_position, vow_hyphen_pawn_hyphen_direction, vow_hyphen_player, vow_hyphen_position, vow_hyphen_position_hyphen_component, vow_hyphen_promotion_hyphen_position, vow_hyphen_promotion_hyphen_position_hyphen_when_hyphen_set, vow_hyphen_square, vow_hyphen_string, vow_hyphen_with, _ref, _ref1;
    vow = function(condition) {
      return function(message) {
        if (!condition) {
          throw new Error(message);
        }
      };
    };
    vow_hyphen_with = function(predicate) {
      return function(message) {
        return function(val) {
          return vow(predicate(val))(message);
        };
      };
    };
    unless_hyphen_undefined = function(pred) {
      return function(val) {
        return val === void 0 || pred(val);
      };
    };
    validation_hyphen_pairs = [[y.board_question_, 'board'], [y.bounded_question_, 'bounded number'], [y.castling_hyphen_right_question_, 'castling right'], [y.castling_hyphen_right_hyphen_set_question_, 'castling right set'], [y.chessman_question_, 'chessman'], [y.chessman_hyphen_type_question_, 'chessman type'], [y.color_question_, 'color'], [y.color_hyphen_pair_question_, 'color pair'], [y.context_question_, 'context'], [y.index_question_, 'index'], [y.integral_hyphen_pair_question_, 'integral pair'], [y.pair_question_, 'pair'], [y.passant_hyphen_position_question_, 'passant position'], [y.pawn_hyphen_direction_question_, 'pawn direction'], [y.player_question_, 'player'], [y.position_question_, 'position'], [y.position_hyphen_component_question_, 'position component'], [y.promotion_hyphen_position_question_, 'promotion position'], [y.square_question_, 'square'], [y.string_question_, 'string']];
    generate_hyphen_singular_hyphen_validator = function(_arg) {
      var pred, str;
      pred = _arg[0], str = _arg[1];
      return vow_hyphen_with(pred)("Invalid " + str);
    };
    singular_hyphen_validators = (_ref = validation_hyphen_pairs.map(generate_hyphen_singular_hyphen_validator), vow_hyphen_board = _ref[0], vow_hyphen_bounded = _ref[1], vow_hyphen_castling_hyphen_right = _ref[2], vow_hyphen_castling_hyphen_right_hyphen_set = _ref[3], vow_hyphen_chessman = _ref[4], vow_hyphen_chessman_hyphen_type = _ref[5], vow_hyphen_color = _ref[6], vow_hyphen_color_hyphen_pair = _ref[7], vow_hyphen_context = _ref[8], vow_hyphen_index = _ref[9], vow_hyphen_integral_hyphen_pair = _ref[10], vow_hyphen_pair = _ref[11], vow_hyphen_passant_hyphen_position = _ref[12], vow_hyphen_pawn_hyphen_direction = _ref[13], vow_hyphen_player = _ref[14], vow_hyphen_position = _ref[15], vow_hyphen_position_hyphen_component = _ref[16], vow_hyphen_promotion_hyphen_position = _ref[17], vow_hyphen_square = _ref[18], vow_hyphen_string = _ref[19], _ref);
    generate_hyphen_plural_hyphen_validator = function(validator) {
      return function(val) {
        return val.map(validator);
      };
    };
    plural_hyphen_validators = (_ref1 = [vow_hyphen_passant_hyphen_position, vow_hyphen_position, vow_hyphen_position_hyphen_component].map(generate_hyphen_plural_hyphen_validator), vow_hyphen_all_hyphen_passant_hyphen_positions = _ref1[0], vow_hyphen_all_hyphen_positions = _ref1[1], vow_hyphen_all_hyphen_position_hyphen_components = _ref1[2], _ref1);
    vow_hyphen_message_hyphen_when_hyphen_set = function(val) {
      var msg;
      msg = 'Invalid message';
      return vow_hyphen_with(unless_hyphen_undefined(y.string_question_))(msg)(val);
    };
    vow_hyphen_promotion_hyphen_position_hyphen_when_hyphen_set = function(val) {
      var msg;
      msg = 'Invalid promotion position';
      return vow_hyphen_with(unless_hyphen_undefined(y.promotion_hyphen_position_question_))(msg)(val);
    };
    return {
      vow_hyphen_all_hyphen_passant_hyphen_positions: vow_hyphen_all_hyphen_passant_hyphen_positions,
      vow_hyphen_all_hyphen_position_hyphen_components: vow_hyphen_all_hyphen_position_hyphen_components,
      vow_hyphen_all_hyphen_positions: vow_hyphen_all_hyphen_positions,
      vow_hyphen_board: vow_hyphen_board,
      vow_hyphen_bounded: vow_hyphen_bounded,
      vow_hyphen_castling_hyphen_right: vow_hyphen_castling_hyphen_right,
      vow_hyphen_castling_hyphen_right_hyphen_set: vow_hyphen_castling_hyphen_right_hyphen_set,
      vow_hyphen_chessman: vow_hyphen_chessman,
      vow_hyphen_chessman_hyphen_type: vow_hyphen_chessman_hyphen_type,
      vow_hyphen_color: vow_hyphen_color,
      vow_hyphen_color_hyphen_pair: vow_hyphen_color_hyphen_pair,
      vow_hyphen_context: vow_hyphen_context,
      vow_hyphen_index: vow_hyphen_index,
      vow_hyphen_integral_hyphen_pair: vow_hyphen_integral_hyphen_pair,
      vow_hyphen_message_hyphen_when_hyphen_set: vow_hyphen_message_hyphen_when_hyphen_set,
      vow_hyphen_pair: vow_hyphen_pair,
      vow_hyphen_passant_hyphen_position: vow_hyphen_passant_hyphen_position,
      vow_hyphen_promotion_hyphen_position_hyphen_when_hyphen_set: vow_hyphen_promotion_hyphen_position_hyphen_when_hyphen_set,
      vow_hyphen_pawn_hyphen_direction: vow_hyphen_pawn_hyphen_direction,
      vow_hyphen_player: vow_hyphen_player,
      vow_hyphen_position: vow_hyphen_position,
      vow_hyphen_promotion_hyphen_position: vow_hyphen_promotion_hyphen_position,
      vow_hyphen_square: vow_hyphen_square,
      vow_hyphen_string: vow_hyphen_string
    };
  });

}).call(this);
