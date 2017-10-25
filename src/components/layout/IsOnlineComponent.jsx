import React, {Component, notification} from 'antd';
import IsOnline from 'react-is-online';

export const IsOnlineComponent = IsOnline(({ ...props }) => {
        props.isOnline && notification.open({
            message: '网络状态',
            description: "在线",
        });
        return null;
});

