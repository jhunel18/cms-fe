import React from 'react'

const RootLayout = ({children}) => {
    // const rootStyle = {
    // height: '100vh', // Adjust height as needed
    // width: '100vw', // Adjust width as needed
    // backgroundColor: '#e5e5f7',
    // // opacity: 0.3,
    // backgroundImage: `radial-gradient(#444cf7 0.5px, #e5e5f7 0.5px)`,
    // backgroundSize: '10px 10px',
    // }
  return (
    <div className='root-main' style={rootStyle}>
    <Header/>
        {children}
    <Footer/>
</div>
  )
}

export default RootLayout