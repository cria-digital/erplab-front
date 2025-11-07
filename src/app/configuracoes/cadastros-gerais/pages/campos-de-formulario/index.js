'use client'
import ModalLeft from '@/components/ModalLeft'
import ModalUp from '@/components/ModalUp'
import Pagination from '@/components/Pagination'
import { Outfit300, Outfit400 } from '@/fonts'
import { listAllFormField } from '@/helpers'
import useDebounce from '@/hooks/useDebounce'
import { Book, Edit2, More, SearchStatus } from 'iconsax-reactjs'
import { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { Status } from './components/status'

// Components
import EditBank from './modal-content/editFormField'
import ProfileBankAccount from './modal-content/profileFormField'
import RegisterFormField from './modal-content/registerFormField'

const CamposDeFormulario = ({
  modalRegisterFormField,
  setModalRegisterFormField,
}) => {
  const [selectedAccount, setSelectedAccount] = useState({})

  const [formField, setFormField] = useState([])
  const [total, setTotal] = useState(0)

  // focus
  const [isFocusedSearch, setIsFocusedSearch] = useState(false)

  // filters
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')

  // modal
  const [modalEditBank, setModalEditBank] = useState(false)
  const [openModalProfileBankAccount, setOpenModalProfileBankAccount] =
    useState(false)

  useEffect(() => {
    const fetchBanks = async () => {
      try {
        const response = await listAllFormField()
        setFormField(response.data.data)
        setTotal(response.data.meta.total)
      } catch (error) {
        console.error('Error fetching banks:', error)
      }
    }
    fetchBanks()
  }, [])

  const fetchBanks = async () => {
    try {
      const response = await listAllFormField()
      setFormField(response.data.data)
      setTotal(response.data.meta.total)
    } catch (error) {
      console.error('Error fetching banks:', error)
    }
  }

  // Filtrar por paginação
  const findDataPerPage = async (props) => {
    setCurrentPage(props)

    try {
      const response = await listAllFormField(searchTerm, props, 10)
      setFormField(response.data.data)
      setTotal(response.data.meta.total)
    } catch (error) {
      console.error('Error fetching banks:', error)
    }
  }

  // Filtrar por termo pesquisado
  const handleChangeUnit = (e) => {
    setSearchTerm(e.target.value)
    debounceChange(e.target.value)
  }

  const debounceChange = useDebounce(handler, 800)

  async function handler(props) {
    setCurrentPage(1)

    try {
      const response = await listAllFormField(props, currentPage, 10)
      setFormField(response.data.data)
      setTotal(response.data.meta.total)
    } catch (error) {
      console.error('Error fetching banks:', error)
    }
  }

  return (
    <div className="flex w-full flex-col gap-[32px]">
      <div
        className={`flex h-[40px] items-center rounded-[8px] px-2 ${
          isFocusedSearch
            ? 'border-[1px] border-[#0F9B7F]'
            : 'border border-[#BBBBBB]'
        }`}
      >
        <input
          placeholder="Pesquisar"
          onChange={handleChangeUnit}
          className={`h-full w-full rounded-[8px] ${Outfit400.className} bg-[#FFFFFF] text-[16px] text-[#222] outline-0`}
          onFocus={() => setIsFocusedSearch(true)}
          onBlur={() => setIsFocusedSearch(false)}
        />
        <SearchStatus size="24" color="#A1A1A1" variant="Bulk" />
      </div>

      <table className="w-full">
        <thead className="sticky top-0">
          <tr className="h-[48px] bg-[#D4D4D4]">
            <th
              className={`text-[13px] ${Outfit400.className} text-center text-[#717171]`}
            >
              Campo
            </th>
            <th
              className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
            >
              Descrição
            </th>
            <th
              className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
            >
              Total de alternativas
            </th>
            <th
              className={`text-[13px] ${Outfit400.className} text-center text-[#717171]`}
            >
              Status
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
            <th
              className={`text-[13px] ${Outfit400.className} text-center text-[#717171]`}
            >
              Opções
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 overflow-y-hidden">
          {formField?.map((item, index) => {
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
                  <div className="flex h-full items-center justify-center">
                    <Status active={item?.status} />
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
                    <More size="28" color="#737373" />
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
              {formField.length > 10 ? 10 : formField.length}
            </span>
          </div>
          <span className={`${Outfit300.className} text-[16px] text-[#222]`}>
            de {total} registros
          </span>
        </div>

        <Pagination
          totalRecords={total}
          recordsPerPage={10}
          onPageChange={(value) => findDataPerPage(value)}
          currentPage={currentPage} // Pass the current page state
        />
      </div>
      <ModalUp
        isOpen={modalRegisterFormField}
        onClose={() => setModalRegisterFormField(false)}
      >
        <RegisterFormField
          onClose={() => setModalRegisterFormField(false)}
          findData={() => fetchBanks()}
        />
      </ModalUp>
      <ModalUp isOpen={modalEditBank} onClose={() => setModalEditBank(false)}>
        <EditBank
          onClose={() => setModalEditBank(false)}
          account={selectedAccount}
          findData={() => fetchBanks()}
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

export default CamposDeFormulario
