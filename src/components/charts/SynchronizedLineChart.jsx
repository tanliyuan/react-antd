import {Area, AreaChart, Brush, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from 'recharts';
import React, {Component} from 'react';
import {Alert, Col, Row} from 'antd';

const data = [
    {name: 'Page A', uv: 4000, pv: 9000},
    {name: 'Page B', uv: 3000, pv: 7222},
    {name: 'Page C', uv: 2000, pv: 6222},
    {name: 'Page D', uv: 1223, pv: 5400},
    {name: 'Page E', uv: 1890, pv: 3200},
    {name: 'Page F', uv: 2390, pv: 2500},
    {name: 'Page G', uv: 3490, pv: 1209},
];
export default class SynchronizedLineCharts extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={8}>
                <LineChart width={600} height={200} data={data} syncId="anyId"
                           margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Legend content={()=> <h4 style={{'textAlign': 'center'}}>A demo of synchronized AreaCharts</h4>} />
                    <Line type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8'/>
                </LineChart>
                    </Col>
                <p>Maybe some other content</p>
                    <Col span={8}>
                <LineChart width={600} height={200} data={data} syncId="anyId"
                           margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Line type='monotone' dataKey='pv' stroke='#82ca9d' fill='#82ca9d'/>
                    <Brush/>
                </LineChart>
                    </Col>
                    <Col span={8}>
                <AreaChart width={600} height={200} data={data} syncId="anyId"
                           margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <CartesianGrid strokeDasharray="3 3"/>
                    <Tooltip/>
                    <Area type='monotone' dataKey='pv' stroke='#82ca9d' fill='#82ca9d'/>
                </AreaChart>
                    </Col>
                </Row>
            </div>
        );
    }
}