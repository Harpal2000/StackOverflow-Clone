import React from 'react'

function Avatar({ children, backgroundColor, padding, margin, color, borderRadius, fontSize, cursor }) {
    const style = {
        backgroundColor,
        padding,
        margin,
        color,
        borderRadius,
        fontSize,
        textAlign: "center",
        cursor: cursor || "pointer",
        textDecoration: "none"
    }
    return (
        <div style={style}>
            {children}
        </div>
    )
}

export default Avatar
