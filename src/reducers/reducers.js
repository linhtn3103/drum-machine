import { POWER, VOLUME, DISPLAY, BANK } from '../actions/actions';

export const reducer = (
  state = { power: true, volume: 0.5, display: 'Drum Machine', bank: true },
  actions
) => {
  switch (actions.type) {
    case POWER:
      return Object.assign({}, state, { power: actions.power });
    case VOLUME:
      return Object.assign({}, state, { volume: actions.volume });
    case DISPLAY:
      return Object.assign({}, state, { display: actions.display });
    case BANK:
      return Object.assign({}, state, { bank: actions.bank });
    default:
      return state;
  }
};
