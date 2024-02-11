const styles = {
  authentication: `bg-c-white flex flex-row h-screen items-center justify-center w-full`,
  authenticationLeftSide: `
    animate-[slide-x_0.5s] bg-center bg-no-repeat bg-cover 
    h-full hidden md:block md:origin-left md:w-3/5 rounded-r-2xl
  `,
  authenticationLeftSideShadow: `
    bg-c-t-black flex flex-col h-full items-center 
    justify-center rounded-r-2xl w-full
  `,
  authenticationTitle: `font-bold text-c-white text-3xl text-bold`,
  authenticationDescription: `italic text-c-lightgrey text-sm`,
  authenticationRightSide: `
    animate-[slide-x_0.5s] flex h-full items-center 
    justify-center md:origin-right md:w-2/5 w-full
  `
}

export default styles