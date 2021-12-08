export const MS_TIME_LIST = [];
for (let index = 0; index < 60; index++) {
  MS_TIME_LIST.push({
    value: index,
    label: index < 10 ? `0${index}` : `${index}`,
  });
}

export const H_LIST = [];
for (let index = 0; index < 24; index++) {
  H_LIST.push({
    value: index,
    label: index < 10 ? `0${index}` : `${index}`,
  });
}

export const D_LIST = [];
for (let index = 1; index <= 31; index++) {
  D_LIST.push({
    value: index,
    label: index < 10 ? `0${index}` : `${index}`,
  });
}

export const M_LIST = [];
for (let index = 1; index <= 12; index++) {
  M_LIST.push({
    value: index,
    label: index < 10 ? `0${index}` : `${index}`,
  });
}

export const W_LIST = [];
for (let index = 1; index <= 7; index++) {
  W_LIST.push({
    value: index,
    label: index < 10 ? `0${index}` : `${index}`,
  });
}

export const cronType = {
  s: '秒',
  m: '分',
  H: '时',
  d: '日',
  W: '周',
  M: '月',
  y: '年',
};
