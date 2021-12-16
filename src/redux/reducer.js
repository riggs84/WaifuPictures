import {bully, cuddle, megumin, neko, shinobu, waifu} from '../constants';

const initialState = {
  waifu: [],
  neko: [],
  shinobu: [],
  megumin: [],
  bully: [],
  cuddle: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case waifu:
      return {...state, waifu: state.waifu.concat(action.payload)};
    case neko:
      return {...state, neko: state.neko.concat(action.payload)};
    case shinobu:
      return {...state, shinobu: state.shinobu.concat(action.payload)};
    case megumin:
      return {...state, megumin: state.megumin.concat(action.payload)};
    case bully:
      return {...state, bully: state.bully.concat(action.payload)};
    case cuddle:
      return {...state, cuddle: state.cuddle.concat(action.payload)};
    default:
      return state;
  }
};

export default reducer;
