'use client'
import ModalFramer from '@/components/ModalFramer'
import { Outfit400 } from '@/fonts'
import { AddSquare } from 'iconsax-reactjs'

import { useState } from 'react'
import SelectCategory from './components/SelectCategory'
import SelectRegister from './components/SelectRegister'
import SideMenu from './components/SideMenu'

const RootLayout = ({ children }) => {
  const [openModalCategorie, setOpenModalCategorie] = useState(false)
  const [openModalRegister, setOpenModalRegister] = useState(false)
  const [selectedCategorie, setSelectCategorie] = useState(null)
  return (
    <div className="m-[8px] flex flex-1 flex-col rounded-[20px] bg-white">
      <div className="flex h-[84px] w-full items-center justify-between border-b-1 border-[#E7E7E7]">
        <span
          className={`${Outfit400.className} ml-[32px] text-[20px] text-[#000] uppercase`}
        >
          CADASTROS GERAIS
        </span>
        <button
          type="botton"
          onClick={() => setOpenModalCategorie(true)}
          className={`mr-[32px] flex h-[44px] w-[154px] items-center justify-center gap-2 rounded-[8px] bg-[#0F9B7F]`}
        >
          <AddSquare size="32" color="#ffffff" variant="Bulk" />
          <span className={`${Outfit400.className} text-[16px] text-white`}>
            CADASTRAR
          </span>
        </button>
      </div>
      <div className="mx-[48px] my-[16px] flex gap-3">
        <SideMenu />
        <main className="flex-1">{children}</main>
      </div>
      {openModalCategorie && (
        <ModalFramer
          open={openModalCategorie}
          setOpen={() => setOpenModalCategorie(!openModalCategorie)}
        >
          <SelectCategory
            setOpenModalCategorie={() => setOpenModalCategorie(false)}
            setSelectCategorie={(e) => {
              setSelectCategorie(e)
              setOpenModalCategorie(false)
              setOpenModalRegister(true)
            }}
          />
        </ModalFramer>
      )}
      {openModalRegister && (
        <ModalFramer
          open={openModalRegister}
          setOpen={() => setOpenModalRegister(!openModalRegister)}
        >
          <SelectRegister
            setOpenModalRegister={() => setOpenModalRegister(false)}
            selectedCategorie={selectedCategorie}
          />
        </ModalFramer>
      )}
    </div>
  )
}
export default RootLayout
