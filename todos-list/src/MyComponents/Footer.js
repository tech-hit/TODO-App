import React from 'react'
 

 export const Footer = () => {
  let footerstyle = {
    position: "relative",
    width: "100%",
    top: "50vh"
  }
  return (
    <footer className='bg-dark text-light text-center py-2' style={footerstyle}>
      <p>© Copyright: MyPlannerList.com</p>
    </footer>
  )
}

export default Footer
