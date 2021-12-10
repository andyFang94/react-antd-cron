import {
  Checkbox,
  Col,
  Descriptions,
  Divider,
  Form,
  InputNumber,
  Radio,
  Row,
  Space,
  Tabs,
  Typography,
} from 'antd';
import React, { useMemo, useState } from 'react';
import {
  cronType,
  D_LIST,
  H_LIST,
  MS_TIME_LIST,
  M_LIST,
  W_LIST,
} from './constant';
import { buildCurCromStr, getInitialProps } from './cronUtils';
const { Paragraph } = Typography;
const { TabPane } = Tabs;

const SelectModeCom = ({ type, customOptions = [], onChangeCron }) => {
  const [form] = Form.useForm();
  const optionsProps = useMemo(() => getInitialProps(type), [type]);

  const handleValueChange = (_changedValues = {}, formValues) => {
    const buildCronStr = buildCurCromStr(formValues);
    onChangeCron(buildCronStr);
  };
  return (
    <Form
      name="SelectModeCom-setting-form"
      form={form}
      onValuesChange={handleValueChange}
    >
      <Row>
        <Col span={24}>
          <Form.Item name="radioSelect" noStyle initialValue={1}>
            <Radio.Group>
              <Space direction="vertical" size="middle">
                <Radio value={1}>每{cronType[type]}执行</Radio>
                <Radio value={2}>
                  <Space>
                    周期从{type === 'W' && '星期'}
                    <Form.Item
                      name="start"
                      noStyle
                      initialValue={optionsProps?.cycleProps?.start?.initialnum}
                    >
                      <InputNumber
                        {...(optionsProps?.cycleProps?.start || {})}
                        step={1}
                      />
                    </Form.Item>
                    ~
                    <Form.Item
                      name="end"
                      noStyle
                      initialValue={optionsProps?.cycleProps?.end?.initialnum}
                    >
                      <InputNumber
                        {...(optionsProps?.cycleProps?.end || {})}
                        step={1}
                      />
                    </Form.Item>
                    {type !== 'W' && cronType[type]}
                  </Space>
                </Radio>
                {type !== 'y' && type !== 'W' && (
                  <Radio value={3}>
                    <Space>
                      <span>从</span>
                      <Form.Item
                        name="from"
                        noStyle
                        initialValue={
                          optionsProps?.fromToProps?.start?.initialnum
                        }
                      >
                        <InputNumber
                          {...(optionsProps?.fromToProps?.start || {})}
                          step={1}
                        />
                      </Form.Item>
                      <span>{cronType[type]}开始 ~ 每</span>
                      <Form.Item
                        name="to"
                        noStyle
                        initialValue={
                          optionsProps?.fromToProps?.end?.initialnum
                        }
                      >
                        <InputNumber
                          {...(optionsProps?.fromToProps?.end || {})}
                          step={1}
                        />
                      </Form.Item>
                      <span>{cronType[type]}执行一次</span>
                    </Space>
                  </Radio>
                )}
                {type !== 'y' && (
                  <Radio value={4}>
                    <Space direction="vertical">
                      <span>指定</span>
                      <Form.Item name="custom" noStyle>
                        <Checkbox.Group options={customOptions} />
                      </Form.Item>
                    </Space>
                  </Radio>
                )}
              </Space>
            </Radio.Group>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default ({ onChange }) => {
  const [s, setS] = useState('*');
  const [mm, setMm] = useState('*');
  const [h, setH] = useState('*');
  const [d, setD] = useState('*');
  const [w, setW] = useState('*');
  const [Mon, setM] = useState('*');
  const [y, setY] = useState('*');

  return (
    <>
      <Tabs defaultActiveKey="1">
        <TabPane tab="秒" key="1">
          <SelectModeCom
            type="s"
            customOptions={MS_TIME_LIST}
            onChangeCron={val => setS(val)}
          />
        </TabPane>
        <TabPane tab="分" key="2">
          <SelectModeCom
            type="m"
            customOptions={MS_TIME_LIST}
            onChangeCron={val => setMm(val)}
          />
        </TabPane>
        <TabPane tab="时" key="3">
          <SelectModeCom
            type="H"
            customOptions={H_LIST}
            onChangeCron={val => setH(val)}
          />
        </TabPane>
        <TabPane tab="日" key="4">
          <SelectModeCom
            type="d"
            customOptions={D_LIST}
            onChangeCron={val => setD(val)}
          />
        </TabPane>
        <TabPane tab="月" key="5">
          <SelectModeCom
            type="M"
            customOptions={M_LIST}
            onChangeCron={val => setW(val)}
          />
        </TabPane>
        <TabPane tab="周" key="6">
          <SelectModeCom
            type="W"
            customOptions={W_LIST}
            onChangeCron={val => setM(val)}
          />
        </TabPane>
        {/* <TabPane tab="年" key="7">
          <SelectModeCom type="y" onChangeCron={(val) => setY(val)} />
        </TabPane> */}
      </Tabs>
      <Divider>定时表达式</Divider>
      <Descriptions column={1}>
        <Descriptions.Item label="请复制表达式">
          <Paragraph
            strong
            type="success"
            copyable={{
              text: `${s} ${mm} ${h} ${d} ${w} ${Mon}`,
              tooltips: '请复制到对应的表单',
            }}
          >{`${s} ${mm} ${h} ${d} ${w} ${Mon}`}</Paragraph>
        </Descriptions.Item>
      </Descriptions>
    </>
  );
};
