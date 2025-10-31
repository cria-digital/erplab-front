'use client'
import CustomSelect from '@/components/CustomSelect'
import ModalLeft from '@/components/ModalLeft'
import ModalUp from '@/components/ModalUp'
import { Outfit300, Outfit400, Outfit700 } from '@/fonts'
import { DeleteAccountBank, listBankAccount } from '@/helpers'
import {
  ArrowLeft2,
  ArrowRight2,
  Bank,
  Book,
  Edit2,
  SearchStatus,
  Trash,
} from 'iconsax-reactjs'
import { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { Status } from './components/status'

// Components
import EditBank from './modal-content/editBank'
import ProfileBankAccount from './modal-content/profileBankAccount'
import RegisterBank from './modal-content/registerBank'

const Bancos = ({ modalRegisterBanks, setModalRegisterBanks }) => {
  const [selectedAccount, setSelectedAccount] = useState({})

  const [banks, setBanks] = useState([])
  const [total, setTotal] = useState(0)

  // modal
  const [modalEditBank, setModalEditBank] = useState(false)
  const [openModalProfileBankAccount, setOpenModalProfileBankAccount] =
    useState(false)

  useEffect(() => {
    const fetchBanks = async () => {
      try {
        const response = await listBankAccount()
        setBanks(response.data.data)
        setTotal(response.data.meta.total)
      } catch (error) {
        console.error('Error fetching banks:', error)
      }
    }

    fetchBanks()
  }, [])

  const fetchBanks = async () => {
    try {
      const response = await listBankAccount()
      setBanks(response.data.data)
      setTotal(response.data.meta.total)
    } catch (error) {
      console.error('Error fetching banks:', error)
    }
  }

  const deleteAccountBank = async (bank) => {
    const response = await DeleteAccountBank(bank.id)
    if (response.success) {
      fetchBanks()
    } else {
      toast.error('Erro ao tentar deletar unidade', {
        position: 'top-right',
      })
    }
  }

  return (
    <div className="flex w-full flex-col gap-[32px]">
      <div className="flex h-[84px] items-center justify-between rounded-[16px] bg-[#F9F9F9]">
        <div className="mx-[10px] flex h-[64px] w-full items-center rounded-[8px] bg-white">
          <div className="flex gap-3 rounded-[8px] px-[8px]">
            <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[8px] bg-[#F9F9F9]">
              <Bank size="28" color="#A1A1A1" />
            </div>
            <div className="flex flex-col justify-around">
              <span
                className={`${Outfit700.className} text-[16px] text-[#0F9B7F]`}
              >
                {total}
              </span>
              <span className={`${Outfit300.className} text-[#737373]`}>
                Bancos
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-2">
        <CustomSelect
          select={{ id: 1, label: 'Status: Todos' }}
          setSelect={() => null}
          options={[
            { id: 1, label: 'Status: Todos' },
            { id: 2, label: '2' },
          ]}
          placeholder={'Status'}
          className={'bg-[#F9F9F9]'}
        />
        <CustomSelect
          select={{ id: 1, label: 'Tipos: todos' }}
          setSelect={() => null}
          options={[
            { id: 1, label: 'Tipos de exames: todos' },
            { id: 2, label: '2' },
          ]}
          placeholder={'Tipos de exames: todos'}
          className={'bg-[#F9F9F9]'}
        />
        <div className="flex h-[40px] flex-2 items-center rounded-[8px] border border-[#BBBBBB] px-2">
          <input
            placeholder="Pesquisar"
            className={`h-full w-full rounded-[8px] ${Outfit400.className} bg-[#FFFFFF] text-[16px] text-[#222] outline-0`}
          />
          <SearchStatus size="24" color="#A1A1A1" variant="Bulk" />
        </div>
      </div>

      <table className="w-full">
        <thead className="sticky top-0">
          <tr className="h-[48px] bg-[#D4D4D4]">
            <th
              className={`text-[13px] ${Outfit400.className} text-center text-[#717171]`}
            >
              Codigo interno
            </th>
            <th
              className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
            >
              Banco
            </th>
            <th
              className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
            >
              Descrição
            </th>
            <th
              className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
            >
              Unidade associada
            </th>
            <th
              className={`text-[13px] ${Outfit400.className} text-center text-[#717171]`}
            >
              Status
            </th>
            <th
              className={`text-[13px] ${Outfit400.className} text-center text-[#717171]`}
            >
              Excluir
            </th>
            <th
              className={`text-[13px] ${Outfit400.className} text-center text-[#717171]`}
            >
              Editar
            </th>
            <th
              className={`text-[13px] ${Outfit400.className} text-center text-[#717171]`}
            >
              Visualizar
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 overflow-y-hidden">
          {banks?.map((item, index) => {
            return (
              <tr
                className="h-[64px] border-b border-[#D9D9D9] bg-white py-[5px]"
                key={index.toString()}
              >
                <td
                  className={`text-[14px] ${Outfit300.className} text-center text-[#383838]`}
                >
                  {item?.codigo_interno}
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-start text-[#383838]`}
                >
                  {item?.banco?.nome}
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-[#383838]`}
                >
                  {item.observacoes}
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-[#383838]`}
                >
                  {item.unidade_saude?.nomeUnidade}
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-[#383838]`}
                >
                  <div className="flex h-full items-center justify-center">
                    <Status active={item?.status} />
                  </div>
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-[#383838]`}
                >
                  <div
                    className="flex h-full items-center justify-center"
                    onClick={() => {
                      deleteAccountBank(item)
                    }}
                  >
                    <Trash size="28" color="#737373" />
                  </div>
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-center text-[#383838]`}
                >
                  <div
                    className="flex h-full items-center justify-center"
                    onClick={() => {
                      setModalEditBank(true)
                      setSelectedAccount(item)
                    }}
                  >
                    <Edit2 size="28" color="#737373" />
                  </div>
                </td>
                <td
                  className={`text-[14px] ${Outfit300.className} text-center text-[#383838]`}
                >
                  <div
                    className="flex h-full items-center justify-center"
                    onClick={() => {
                      setOpenModalProfileBankAccount(true)
                      setSelectedAccount(item)
                    }}
                  >
                    <Book size="28" color="#737373" />
                  </div>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="flex h-[40px] items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-[40px] w-[61px] items-center rounded-[8px] bg-[#F9F9F9]">
            <span
              className={`${Outfit400.className} pl-2 text-[16px] text-[#222]`}
            >
              01
            </span>
          </div>
          <span className={`${Outfit300.className} text-[16px] text-[#222]`}>
            de 01 registros
          </span>
        </div>

        <div className="flex items-center">
          <ArrowLeft2 size="28" color="#D9D9D9" />
          <div className="flex h-[40px] items-center justify-center rounded-[8px] bg-[#E0FFF9]">
            <span className={`${Outfit400.className} flex px-4 text-[#0F9B7F]`}>
              01
            </span>
          </div>
          <ArrowRight2 size="28" color="#D9D9D9" />
        </div>
      </div>
      <ModalUp
        isOpen={modalRegisterBanks}
        onClose={() => setModalRegisterBanks(false)}
      >
        <RegisterBank onClose={() => setModalRegisterBanks(false)} />
      </ModalUp>
      <ModalUp isOpen={modalEditBank} onClose={() => setModalEditBank(false)}>
        <EditBank
          onClose={() => setModalEditBank(false)}
          account={selectedAccount}
        />
      </ModalUp>
      <ModalLeft
        isOpen={openModalProfileBankAccount}
        onClose={() => setOpenModalProfileBankAccount(false)}
      >
        <ProfileBankAccount account={selectedAccount} />
      </ModalLeft>
      <ToastContainer />
    </div>
  )
}

export default Bancos
