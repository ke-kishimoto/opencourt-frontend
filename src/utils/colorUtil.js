const COLOR_STATUS_PARTICIPATED = 1;
const COLOR_STATUS_PARTICIPATED_WAITING = 2;
const COLOR_STATUS_AFFORD = 3;
const COLOR_STATUS_FEW = 4;
const COLOR_STATUS_WAITING = 5;
const COLOR_STATUS_END = 9;

const COLOR_CODE_PARTICIPATED = '#007bff';
const COLOR_CODE_PARTICIPATED_WAITING = '#DE5021';
const COLOR_CODE_AFFORD = '#0C9';
const COLOR_CODE_FEW = '#FFCC33';
const COLOR_CODE_WAITING = '#FF367F';
const COLOR_CODE_END = '#BBB';

const getStatusColorCode = (status) => {
  switch (status) {
    case COLOR_STATUS_PARTICIPATED:
      return COLOR_CODE_PARTICIPATED;
    case COLOR_STATUS_PARTICIPATED_WAITING:
      return COLOR_CODE_PARTICIPATED_WAITING;
    case COLOR_STATUS_AFFORD:
      return COLOR_CODE_AFFORD;
    case COLOR_STATUS_FEW:
      return COLOR_CODE_FEW;
    case COLOR_STATUS_WAITING:
      return COLOR_CODE_WAITING;
    case COLOR_STATUS_END:
      return COLOR_CODE_END;
    default:
      return '#FFF';
  }
}

export {COLOR_STATUS_PARTICIPATED, 
  COLOR_STATUS_PARTICIPATED_WAITING, 
  COLOR_STATUS_AFFORD,
  COLOR_STATUS_FEW,
  COLOR_STATUS_WAITING,
  COLOR_STATUS_END,
  getStatusColorCode,
}