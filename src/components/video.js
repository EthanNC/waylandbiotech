
import React from 'react';
import { withPrefix } from 'gatsby';

export default ({ src, style }) => {
    return (
        <video
            autoPlay
            muted
            loop
            // style={{
            //     position: 'absolute',
            //     minHeight: '50%',
            //     top: 0,
            //     right: 0,
            //     bottom: 0,
            //     left: 0,
            //     zIndex: '-1',
            //     objectFit: 'contain',
            //     // objectPosition: 'center'
            // }}
            style={style}
            src={withPrefix(src)}
        >
            <source src={withPrefix(src)} type="video/mp4" />
            Your device does not support playing 'video/mp4' videos
        </video>
    )
}