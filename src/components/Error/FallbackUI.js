import React from 'react'

const FallbackUI = ({status}) => {
    return (
        <div>
            <h2>Response Status: {status}</h2>
        </div>
    )
}

export default FallbackUI
