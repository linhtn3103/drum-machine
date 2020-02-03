export const POWER = "POWER";
export const VOLUME = "VOLUME";
export const DISPLAY = "DISPLAY";
export const BANK = "BANK";

export const changePower = currentState => {
  return {
    type: POWER,
    power: !currentState
  };
};

export const changeVolume = newVolume => {
  return {
    type: VOLUME,
    volume: newVolume
  };
};
export const changeDisplay = newDisplay => {
  return {
    type: DISPLAY,
    display: newDisplay
  };
};
export const changeBank = currentBank => {
  return {
    type: BANK,
    bank: !currentBank
  };
};
