import {
  Tabs,
  Divider,
  Descriptions,
  Typography,
  Form,
  Row,
  Col,
  Radio,
  Space,
  InputNumber,
  Checkbox,
} from 'antd';
import React, { useState, useMemo } from 'react';

function _extends() {
  _extends =
    Object.assign ||
    function(target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

  return _extends.apply(this, arguments);
}

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _i =
    arr == null
      ? null
      : (typeof Symbol !== 'undefined' && arr[Symbol.iterator]) ||
        arr['@@iterator'];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

var MS_TIME_LIST = [];

for (var index = 0; index < 60; index++) {
  MS_TIME_LIST.push({
    value: index,
    label: index < 10 ? '0'.concat(index) : ''.concat(index),
  });
}

var H_LIST = [];

for (var _index = 0; _index < 24; _index++) {
  H_LIST.push({
    value: _index,
    label: _index < 10 ? '0'.concat(_index) : ''.concat(_index),
  });
}

var D_LIST = [];

for (var _index2 = 1; _index2 <= 31; _index2++) {
  D_LIST.push({
    value: _index2,
    label: _index2 < 10 ? '0'.concat(_index2) : ''.concat(_index2),
  });
}

var M_LIST = [];

for (var _index3 = 1; _index3 <= 12; _index3++) {
  M_LIST.push({
    value: _index3,
    label: _index3 < 10 ? '0'.concat(_index3) : ''.concat(_index3),
  });
}

var W_LIST = [];

for (var _index4 = 1; _index4 <= 7; _index4++) {
  W_LIST.push({
    value: _index4,
    label: _index4 < 10 ? '0'.concat(_index4) : ''.concat(_index4),
  });
}

var cronType = {
  s: '秒',
  m: '分',
  H: '时',
  d: '日',
  W: '周',
  M: '月',
  y: '年',
};

function buildCurCromStr(values) {
  var radioSelect = values.radioSelect,
    start = values.start,
    end = values.end,
    from = values.from,
    to = values.to,
    _values$custom = values.custom,
    custom = _values$custom === void 0 ? [] : _values$custom;
  var sCromStr = '*';

  switch (radioSelect) {
    case 1:
      sCromStr = '*';
      break;

    case 2:
      sCromStr = ''.concat(start, '-').concat(end);
      break;

    case 3:
      sCromStr = ''.concat(from, '/').concat(to);
      break;

    case 4:
      sCromStr =
        (custom === null || custom === void 0 ? void 0 : custom.join()) || '*';
      break;
  }

  return sCromStr;
}
function getInitialProps(type) {
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

var Paragraph = Typography.Paragraph;
var TabPane = Tabs.TabPane;

var SelectModeCom = function SelectModeCom(_ref) {
  var _optionsProps$cyclePr,
    _optionsProps$cyclePr2,
    _optionsProps$cyclePr3,
    _optionsProps$cyclePr4,
    _optionsProps$cyclePr5,
    _optionsProps$cyclePr6,
    _optionsProps$fromToP,
    _optionsProps$fromToP2,
    _optionsProps$fromToP3,
    _optionsProps$fromToP4,
    _optionsProps$fromToP5,
    _optionsProps$fromToP6;

  var type = _ref.type,
    _ref$customOptions = _ref.customOptions,
    customOptions = _ref$customOptions === void 0 ? [] : _ref$customOptions,
    onChangeCron = _ref.onChangeCron;

  var _Form$useForm = Form.useForm(),
    _Form$useForm2 = _slicedToArray(_Form$useForm, 1),
    form = _Form$useForm2[0];

  var optionsProps = useMemo(
    function() {
      return getInitialProps(type);
    },
    [type],
  );

  var handleValueChange = function handleValueChange() {
    var formValues = arguments.length > 1 ? arguments[1] : undefined;
    var buildCronStr = buildCurCromStr(formValues);
    onChangeCron(buildCronStr);
  };

  return /*#__PURE__*/ React.createElement(
    Form,
    {
      name: 'SelectModeCom-setting-form',
      form: form,
      onValuesChange: handleValueChange,
    },
    /*#__PURE__*/ React.createElement(
      Row,
      null,
      /*#__PURE__*/ React.createElement(
        Col,
        {
          span: 24,
        },
        /*#__PURE__*/ React.createElement(
          Form.Item,
          {
            name: 'radioSelect',
            noStyle: true,
            initialValue: 1,
          },
          /*#__PURE__*/ React.createElement(
            Radio.Group,
            null,
            /*#__PURE__*/ React.createElement(
              Space,
              {
                direction: 'vertical',
                size: 'middle',
              },
              /*#__PURE__*/ React.createElement(
                Radio,
                {
                  value: 1,
                },
                '\u6BCF',
                cronType[type],
                '\u6267\u884C',
              ),
              /*#__PURE__*/ React.createElement(
                Radio,
                {
                  value: 2,
                },
                /*#__PURE__*/ React.createElement(
                  Space,
                  null,
                  '\u5468\u671F\u4ECE',
                  type === 'W' && '星期',
                  /*#__PURE__*/ React.createElement(
                    Form.Item,
                    {
                      name: 'start',
                      noStyle: true,
                      initialValue:
                        optionsProps === null || optionsProps === void 0
                          ? void 0
                          : (_optionsProps$cyclePr =
                              optionsProps.cycleProps) === null ||
                            _optionsProps$cyclePr === void 0
                          ? void 0
                          : (_optionsProps$cyclePr2 =
                              _optionsProps$cyclePr.start) === null ||
                            _optionsProps$cyclePr2 === void 0
                          ? void 0
                          : _optionsProps$cyclePr2.initialnum,
                    },
                    /*#__PURE__*/ React.createElement(
                      InputNumber,
                      _extends(
                        {},
                        (optionsProps === null || optionsProps === void 0
                          ? void 0
                          : (_optionsProps$cyclePr3 =
                              optionsProps.cycleProps) === null ||
                            _optionsProps$cyclePr3 === void 0
                          ? void 0
                          : _optionsProps$cyclePr3.start) || {},
                        {
                          step: 1,
                        },
                      ),
                    ),
                  ),
                  '~',
                  /*#__PURE__*/ React.createElement(
                    Form.Item,
                    {
                      name: 'end',
                      noStyle: true,
                      initialValue:
                        optionsProps === null || optionsProps === void 0
                          ? void 0
                          : (_optionsProps$cyclePr4 =
                              optionsProps.cycleProps) === null ||
                            _optionsProps$cyclePr4 === void 0
                          ? void 0
                          : (_optionsProps$cyclePr5 =
                              _optionsProps$cyclePr4.end) === null ||
                            _optionsProps$cyclePr5 === void 0
                          ? void 0
                          : _optionsProps$cyclePr5.initialnum,
                    },
                    /*#__PURE__*/ React.createElement(
                      InputNumber,
                      _extends(
                        {},
                        (optionsProps === null || optionsProps === void 0
                          ? void 0
                          : (_optionsProps$cyclePr6 =
                              optionsProps.cycleProps) === null ||
                            _optionsProps$cyclePr6 === void 0
                          ? void 0
                          : _optionsProps$cyclePr6.end) || {},
                        {
                          step: 1,
                        },
                      ),
                    ),
                  ),
                  type !== 'W' && cronType[type],
                ),
              ),
              type !== 'y' &&
                type !== 'W' &&
                /*#__PURE__*/ React.createElement(
                  Radio,
                  {
                    value: 3,
                  },
                  /*#__PURE__*/ React.createElement(
                    Space,
                    null,
                    /*#__PURE__*/ React.createElement('span', null, '\u4ECE'),
                    /*#__PURE__*/ React.createElement(
                      Form.Item,
                      {
                        name: 'from',
                        noStyle: true,
                        initialValue:
                          optionsProps === null || optionsProps === void 0
                            ? void 0
                            : (_optionsProps$fromToP =
                                optionsProps.fromToProps) === null ||
                              _optionsProps$fromToP === void 0
                            ? void 0
                            : (_optionsProps$fromToP2 =
                                _optionsProps$fromToP.start) === null ||
                              _optionsProps$fromToP2 === void 0
                            ? void 0
                            : _optionsProps$fromToP2.initialnum,
                      },
                      /*#__PURE__*/ React.createElement(
                        InputNumber,
                        _extends(
                          {},
                          (optionsProps === null || optionsProps === void 0
                            ? void 0
                            : (_optionsProps$fromToP3 =
                                optionsProps.fromToProps) === null ||
                              _optionsProps$fromToP3 === void 0
                            ? void 0
                            : _optionsProps$fromToP3.start) || {},
                          {
                            step: 1,
                          },
                        ),
                      ),
                    ),
                    /*#__PURE__*/ React.createElement(
                      'span',
                      null,
                      cronType[type],
                      '\u5F00\u59CB ~ \u6BCF',
                    ),
                    /*#__PURE__*/ React.createElement(
                      Form.Item,
                      {
                        name: 'to',
                        noStyle: true,
                        initialValue:
                          optionsProps === null || optionsProps === void 0
                            ? void 0
                            : (_optionsProps$fromToP4 =
                                optionsProps.fromToProps) === null ||
                              _optionsProps$fromToP4 === void 0
                            ? void 0
                            : (_optionsProps$fromToP5 =
                                _optionsProps$fromToP4.end) === null ||
                              _optionsProps$fromToP5 === void 0
                            ? void 0
                            : _optionsProps$fromToP5.initialnum,
                      },
                      /*#__PURE__*/ React.createElement(
                        InputNumber,
                        _extends(
                          {},
                          (optionsProps === null || optionsProps === void 0
                            ? void 0
                            : (_optionsProps$fromToP6 =
                                optionsProps.fromToProps) === null ||
                              _optionsProps$fromToP6 === void 0
                            ? void 0
                            : _optionsProps$fromToP6.end) || {},
                          {
                            step: 1,
                          },
                        ),
                      ),
                    ),
                    /*#__PURE__*/ React.createElement(
                      'span',
                      null,
                      cronType[type],
                      '\u6267\u884C\u4E00\u6B21',
                    ),
                  ),
                ),
              type !== 'y' &&
                /*#__PURE__*/ React.createElement(
                  Radio,
                  {
                    value: 4,
                  },
                  /*#__PURE__*/ React.createElement(
                    Space,
                    {
                      direction: 'vertical',
                    },
                    /*#__PURE__*/ React.createElement(
                      'span',
                      null,
                      '\u6307\u5B9A',
                    ),
                    /*#__PURE__*/ React.createElement(
                      Form.Item,
                      {
                        name: 'custom',
                        noStyle: true,
                      },
                      /*#__PURE__*/ React.createElement(Checkbox.Group, {
                        options: customOptions,
                      }),
                    ),
                  ),
                ),
            ),
          ),
        ),
      ),
    ),
  );
};

var index$1 = function(_ref2) {
  var onChange = _ref2.onChange;

  var _useState = useState('*'),
    _useState2 = _slicedToArray(_useState, 2),
    s = _useState2[0],
    setS = _useState2[1];

  var _useState3 = useState('*'),
    _useState4 = _slicedToArray(_useState3, 2),
    mm = _useState4[0],
    setMm = _useState4[1];

  var _useState5 = useState('*'),
    _useState6 = _slicedToArray(_useState5, 2),
    h = _useState6[0],
    setH = _useState6[1];

  var _useState7 = useState('*'),
    _useState8 = _slicedToArray(_useState7, 2),
    d = _useState8[0],
    setD = _useState8[1];

  var _useState9 = useState('*'),
    _useState10 = _slicedToArray(_useState9, 2),
    w = _useState10[0],
    setW = _useState10[1];

  var _useState11 = useState('*'),
    _useState12 = _slicedToArray(_useState11, 2),
    Mon = _useState12[0],
    setM = _useState12[1];

  var _useState13 = useState('*'),
    _useState14 = _slicedToArray(_useState13, 2),
    y = _useState14[0],
    setY = _useState14[1];

  return /*#__PURE__*/ React.createElement(
    React.Fragment,
    null,
    /*#__PURE__*/ React.createElement(
      Tabs,
      {
        defaultActiveKey: '1',
      },
      /*#__PURE__*/ React.createElement(
        TabPane,
        {
          tab: '\u79D2',
          key: '1',
        },
        /*#__PURE__*/ React.createElement(SelectModeCom, {
          type: 's',
          customOptions: MS_TIME_LIST,
          onChangeCron: function onChangeCron(val) {
            return setS(val);
          },
        }),
      ),
      /*#__PURE__*/ React.createElement(
        TabPane,
        {
          tab: '\u5206',
          key: '2',
        },
        /*#__PURE__*/ React.createElement(SelectModeCom, {
          type: 'm',
          customOptions: MS_TIME_LIST,
          onChangeCron: function onChangeCron(val) {
            return setMm(val);
          },
        }),
      ),
      /*#__PURE__*/ React.createElement(
        TabPane,
        {
          tab: '\u65F6',
          key: '3',
        },
        /*#__PURE__*/ React.createElement(SelectModeCom, {
          type: 'H',
          customOptions: H_LIST,
          onChangeCron: function onChangeCron(val) {
            return setH(val);
          },
        }),
      ),
      /*#__PURE__*/ React.createElement(
        TabPane,
        {
          tab: '\u65E5',
          key: '4',
        },
        /*#__PURE__*/ React.createElement(SelectModeCom, {
          type: 'd',
          customOptions: D_LIST,
          onChangeCron: function onChangeCron(val) {
            return setD(val);
          },
        }),
      ),
      /*#__PURE__*/ React.createElement(
        TabPane,
        {
          tab: '\u6708',
          key: '5',
        },
        /*#__PURE__*/ React.createElement(SelectModeCom, {
          type: 'M',
          customOptions: M_LIST,
          onChangeCron: function onChangeCron(val) {
            return setW(val);
          },
        }),
      ),
      /*#__PURE__*/ React.createElement(
        TabPane,
        {
          tab: '\u5468',
          key: '6',
        },
        /*#__PURE__*/ React.createElement(SelectModeCom, {
          type: 'W',
          customOptions: W_LIST,
          onChangeCron: function onChangeCron(val) {
            return setM(val);
          },
        }),
      ),
    ),
    /*#__PURE__*/ React.createElement(
      Divider,
      null,
      '\u5B9A\u65F6\u8868\u8FBE\u5F0F',
    ),
    /*#__PURE__*/ React.createElement(
      Descriptions,
      {
        column: 1,
      },
      /*#__PURE__*/ React.createElement(
        Descriptions.Item,
        {
          label: '\u8BF7\u590D\u5236\u8868\u8FBE\u5F0F',
        },
        /*#__PURE__*/ React.createElement(
          Paragraph,
          {
            strong: true,
            type: 'success',
            copyable: {
              text: ''
                .concat(s, ' ')
                .concat(mm, ' ')
                .concat(h, ' ')
                .concat(d, ' ')
                .concat(w, ' ')
                .concat(Mon),
              tooltips: '请复制到对应的表单',
            },
          },
          ''
            .concat(s, ' ')
            .concat(mm, ' ')
            .concat(h, ' ')
            .concat(d, ' ')
            .concat(w, ' ')
            .concat(Mon),
        ),
      ),
    ),
  );
};

export { index$1 as AntCron };
