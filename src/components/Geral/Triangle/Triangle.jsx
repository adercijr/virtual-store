import React from 'react'
import './Triangle.css'

const Triangle = props => {
    const {size, color, direction} = props

  
    return (    
        <>  
            {direction === 'right' &&
                <div className="arrow" 
                    style={{
                        borderColor:`transparent ${color}`,
                        borderWidth:`${size} 0 ${size} ${size}`
                        
                }}></div>
            }
            {direction === 'down' &&
                <div className="arrow" 
                    style={{
                        borderColor:`${color} transparent`,
                        borderWidth:`${size} ${size} 0 ${size}`
                }}></div>
            }
            {direction === 'up' &&
                <div className="arrow" 
                    style={{
                        borderColor:`${color} transparent`,
                        borderWidth:`0 ${size} ${size} ${size}`
                    }}></div>
            }
            {direction === 'left' &&
                <div className="arrow" 
                    style={{
                        borderColor:`transparent ${color}`,
                        borderWidth:`${size} ${size} ${size} 0`
                    }}>
                </div>
            }
        </>
    )
}
export default Triangle