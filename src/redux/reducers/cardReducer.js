import Types from "../actionTypes";

const initialState = {
  card: [],
  isLoading: true,
  error: null,
};

const cardReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Types.CARD_LOADING:
      return { ...state, isLoading: true };

    case Types.CARD_SUCCESS:
      return { ...state, card: payload, isLoading: false, error: null };
    case Types.CARD_ERROR:
      return { ...state, isLoading: false, error: payload?.message };
    case Types.CREATE_ITEM:
      return { ...state, card: state.card.concat(payload) };
    case Types.UPDATE_ITEM:
      //payload içindeki id`ye sahip olan ürünün dizideki eski halini güncelle
      const updated = state.card.map((i) =>
        i.id === payload.id ? payload : i
      );
      return { ...state, card: updated };
    case Types.DELETE_ITEM:
      const filtred = state.card.filter((i) => i.id !== payload);
      return { ...state, card: filtred };

    default:
      return state;
  }
};

export default cardReducer;
