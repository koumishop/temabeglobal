import { Children } from 'react'
import Card from 'react-animated-3d-card'

const CustomedCard = ({width, height, children})=>{ 
    return <Card       
      style={{
        backgroundColor: '#312F33',
        width: `${width}`,//'310px',
        height: `${height}`,//'185px',
        cursor: 'pointer',
        display:'flex',
        flexDirection: 'column',
        justifyContent:'center',
        alignItems:'center'
      }}
      onClick={() => console.log('Card clicked')}
    >{children}</Card>
}

export default CustomedCard