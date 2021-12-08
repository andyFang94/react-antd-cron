export function buildCurCromStr(values) {
  const { radioSelect, start, end, from, to, custom = [] } = values;
  let sCromStr = '*';
  switch (radioSelect) {
    case 1:
      sCromStr = '*';
      break;
    case 2:
      sCromStr = `${start}-${end}`;
      break;
    case 3:
      sCromStr = `${from}/${to}`;
      break;
    case 4:
      sCromStr = custom?.join() || '*';
      break;

    default:
      break;
  }
  return sCromStr;
}

export function getInitialProps(type) {
  switch (type) {
    case 's':
    case 'm':
      return {
        cycleProps: {
          start: {
            min: 1,
            max: 58,
            initialnum: 1,
          },
          end: {
            min: 2,
            max: 59,
            initialnum: 2,
          },
        },
        fromToProps: {
          start: {
            min: 0,
            max: 59,
            initialnum: 0,
          },
          end: {
            min: 1,
            max: 59,
            initialnum: 1,
          },
        },
      };
    case 'H':
      return {
        cycleProps: {
          start: {
            min: 0,
            max: 23,
            initialnum: 0,
          },
          end: {
            min: 2,
            max: 23,
            initialnum: 2,
          },
        },
        fromToProps: {
          start: {
            min: 0,
            max: 23,
            initialnum: 0,
          },
          end: {
            min: 1,
            max: 23,
            initialnum: 1,
          },
        },
      };
    case 'd':
      return {
        cycleProps: {
          start: {
            min: 1,
            max: 31,
            initialnum: 1,
          },
          end: {
            min: 2,
            max: 31,
            initialnum: 2,
          },
        },
        fromToProps: {
          start: {
            min: 1,
            max: 31,
            initialnum: 1,
          },
          end: {
            min: 1,
            max: 31,
            initialnum: 1,
          },
        },
      };
    case 'M':
      return {
        cycleProps: {
          start: {
            min: 1,
            max: 12,
            initialnum: 1,
          },
          end: {
            min: 2,
            max: 12,
            initialnum: 2,
          },
        },
        fromToProps: {
          start: {
            min: 1,
            max: 12,
            initialnum: 1,
          },
          end: {
            min: 1,
            max: 12,
            initialnum: 1,
          },
        },
      };
    case 'W':
      return {
        cycleProps: {
          start: {
            min: 1,
            max: 7,
            initialnum: 1,
          },
          end: {
            min: 2,
            max: 7,
            initialnum: 2,
          },
        },
      };
    case 'y':
      return {
        cycleProps: {
          start: {
            min: 2013,
            max: 3000,
            initialnum: 2021,
          },
          end: {
            min: 2013,
            max: 3000,
            initialnum: 2022,
          },
        },
      };
    default:
      return {};
  }
}
