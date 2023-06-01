import Card from 'react-animated-3d-card'

const CustomedCard = ({width, height, onClick, children})=>{ 
return (
  <div className={`p-2 rounded-2xl bg-gradient-to-r from-[#312F33]-200 via-[#312F33]-400 to-[#312F33]-600 bg-[#312F33] ${width} ${height} cursor-pointer shadow-xl flex flex-col justify-center items-center hover:shadow-2xl hover:scale-110`}  onClick={onClick}>
  {children}
  </div>
)
  // return <Card       
    //   style={{
    //     backgroundColor: '#312F33',
    //     width: `${width}`,//'310px',
    //     height: `${height}`,//'185px',
    //     cursor: 'pointer',
    //     display:'flex',
    //     flexDirection: 'column',
    //     justifyContent:'center',
    //     alignItems:'center'
    //   }}
    //   onClick={onClick}
    // >{children}</Card>
}

export default CustomedCard