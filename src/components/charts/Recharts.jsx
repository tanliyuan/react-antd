/**
 * Created by hao.cheng on 2017/4/21.
 */
import React from 'react';
import {Card, Col, Row} from 'antd';
import RechartsSimpleLineChart from './RechartsSimpleLineChart';
import RechartsBarChart from './RechartsBarChart';
import RechartsRadialBarChart from './RechartsRadialBarChart';
import RechartsRadarChart from './RechartsRadarChart';
import SynchronizedLineChart from './SynchronizedLineChart';
import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';

const data = [
    {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
    {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
    {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
    {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
    {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
    {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
    {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

class Recharts extends React.Component {
    render() {
        return (
            <div className="gutter-example">
                <Row gutter={16}>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card title="基础线形图" bordered={false}>
                                <RechartsSimpleLineChart/>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card title="基础线形图" bordered={false}>
                                <ResponsiveContainer height={300} width='100%'>
                                    <LineChart  data={data}
                                               margin={{top: 5, right: 20, bottom: 5, left: 0}}>
                                        <Line type="monotone" dataKey="uv" stroke="#8884d8"/>
                                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
                                        <XAxis dataKey="name"/>
                                        <YAxis/>
                                        <Tooltip/>
                                    </LineChart>
                                </ResponsiveContainer>
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card title="基础线形图" bordered={false}>
                                <RechartsBarChart/>
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card title="基础线形图" bordered={false}>
                                <RechartsRadialBarChart/>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={12}>
                        <div className="gutter-box">
                            <Card title="基础线形图" bordered={false}>
                                <RechartsRadarChart/>
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="gutter-box">
                            <Card title="基础线形图" bordered={false}>
                                <SynchronizedLineChart />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Recharts;