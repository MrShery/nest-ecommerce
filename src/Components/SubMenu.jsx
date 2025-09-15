import React from 'react'
import SubMenuDropDown from './SubMenuDropDown';

function SubMenu({item,index}) {
  return (
    <>
         {index !== 5 && index !== 6 && (
              <div key={index} className=" absolute text-[16px] z-[60] bg-white flex flex-col gap-3 justify-center px-6 w-[250px] py-6 shadow-xl border top-[200%] opacity-0 invisible group-hover:visible group-hover:opacity-100 group-hover:top-[150%] transition-all  left-0 rounded-md">
                {item.subMeneu.map((subItem, subIndex) =>
                  index != 4 ? (
                    <h4 key={subIndex} className=" text-[#253D4E] font-semibold text-[15px] hover:text-[#87C8A7]  cursor-pointer transition-all">
                      {subItem}
                    </h4>
                  ) : <SubMenuDropDown key={subIndex} subIndex={subIndex} subItem={subItem}/>
                )}
              </div>
            )}
    </>
  )
}

export default SubMenu;
