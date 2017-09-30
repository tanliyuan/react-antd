import React, {Component} from 'react';
import {Col, message, Row, Select} from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';

const Option = Select.Option;


export default class ReactSelect extends Component {
    notifyChange = val => (message.success('选择了:' + val));

    render() {
        const options = [
            { value: 'one', label:'one'},
            { value: 'two', label: 'two'}
        ];
        return (
            <div className='gutter-example'>
                <BreadcrumbCustom first="表单" second="Select" />
                <Row gutter={50}>
                    <Col className={'gutter-row'} span={4}>
                        <Select
                           size='large'
                            style={{width: '100%'}}
                           defaultValue="lucy"
                           onChange={this.notifyChange}
                           allowClear
                        >
                            <Option value="jack">jack</Option>
                            <Option value="lucy">lucy</Option>
                            <Option value="java" disabled>java</Option>
                        </Select>
                    </Col>

                    <Col span={4}>
                        <Select mode="multiple" style={{width: '100%'}}
                        placeholder="Please select"
                        onChange={this.notifyChange}>
                            <Option value="jack">jack</Option>
                            <Option value="lucy">lucy</Option>
                            <Option value="java" disabled>java</Option>
                        </Select>
                    </Col>

                    <Col span={4}>
                        <Select mode="tags"
                        onChange={this.notifyChange}
                        tokenSeparators={[',']}
                        style={{'min-width': 50, width: '100%'}}>

                        </Select>
                    </Col>
                </Row>
            </div>
        )
    }
}