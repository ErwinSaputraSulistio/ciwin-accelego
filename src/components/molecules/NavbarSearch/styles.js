const styles = {
  navbarSearch: `
    border border-c-darkgrey flex flex-col items-center justify-between 
    mt-6 mb-8 md:flex-row md:m-0 md:w-3/6 rounded-md text-c-black w-full
  `,
  navbarSearchGroup: `
    border-t border-c-darkgrey flex flex-row justify-end md:border-none md:w-3/4 w-full
  `,
  navbarSearchInput: `
    border-none md:w-5/6 outline-none px-4 py-2 rounded-bl-md text-sm w-3/4
  `,
  navbarSearchButton: `
    bg-c-black duration-200 flex flex-col hover:opacity-50 items-center 
    justify-center md:w-1/6 md:rounded-tr-md rounded-br-md w-1/4
  `,
  navbarSearchButtonLogo: `invert h-12 p-4`
}

export default styles