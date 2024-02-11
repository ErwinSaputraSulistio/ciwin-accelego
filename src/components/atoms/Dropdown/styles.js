const styles = {
  dropdown: `
    border-r border-c-lightgrey flex flex-col md:w-36 text-sm w-full
  `,
  dropdownLogo: `duration-100 h-4`,
  dropdownLogoActive: `rotate-180`,
  dropdownButton: `
    cursor-pointer duration-200 flex flex-row hover:opacity-50 
    items-center justify-between p-3 w-full
  `,
  dropdownOptions: `
    bg-white border border-c-darkgrey flex flex-col fixed rounded-b-lg 
    text-c-darkgrey mt-11 md:w-36 truncate w-11/12
  `,
  dropdownItem: `cursor-pointer duration-200 hover:bg-c-white px-4 py-2 text-c-black`
}

export default styles