import { Outfit300, Outfit400, Outfit700 } from '@/fonts'
import {
  ArrowLeft2,
  ArrowRight2,
  Book,
  Edit2,
  More,
  Profile2User,
  SearchStatus,
  TickCircle,
} from 'iconsax-reactjs'

const UnitOfHealth = () => {
  return (
    <div className="flex flex-col gap-[32px]">
      <div className="flex h-[84px] items-center justify-between rounded-[16px] bg-[#F9F9F9]">
        <div className="mx-[10px] flex h-[64px] w-full items-center rounded-[8px] bg-white">
          <div className="flex gap-3 rounded-[8px] px-[8px]">
            <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[8px] bg-[#F9F9F9]">
              <Profile2User size="28" color="#A1A1A1" />
            </div>
            <div className="flex flex-col justify-around">
              <span
                className={`${Outfit700.className} text-[16px] text-[#0F9B7F]`}
              >
                500
              </span>
              <span className={`${Outfit300.className} text-[#737373]`}>
                Pacientes
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex h-[40px] items-center rounded-[8px] border border-[#BBBBBB] px-2">
        <input
          placeholder="Pesquisar"
          className={`h-full w-full rounded-[8px] ${Outfit400.className} bg-[#FFFFFF] text-[16px] outline-0`}
        />
        <SearchStatus size="24" color="#A1A1A1" variant="Bulk" />
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
              Nome da unidade
            </th>
            <th
              className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
            >
              CNPJ
            </th>
            <th
              className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
            >
              Responsável
            </th>
            <th
              className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
            >
              Cidade
            </th>
            <th
              className={`text-[13px] ${Outfit400.className} text-start text-[#717171]`}
            >
              Ativo
            </th>
            <th
              className={`text-[13px] ${Outfit400.className} text-center text-[#717171]`}
            >
              Certificado
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
              Opçoes
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 overflow-y-hidden">
          <tr className="h-[64px] border-b border-[#D9D9D9] bg-white py-[5px]">
            <td
              className={`text-[14px] ${Outfit300.className} text-center text-[#383838]`}
            >
              0001
            </td>
            <td
              className={`text-[14px] ${Outfit300.className} text-start text-[#383838]`}
            >
              Unidade Marechal
            </td>
            <td className={`text-[14px] ${Outfit300.className} text-[#383838]`}>
              99.999.999/0001-00
            </td>
            <td className={`text-[14px] ${Outfit300.className} text-[#383838]`}>
              Fabíola
            </td>
            <td className={`text-[14px] ${Outfit300.className} text-[#383838]`}>
              São Paulo
            </td>
            <td className={`text-[14px] ${Outfit300.className} text-[#383838]`}>
              <p>s</p>
            </td>
            <td>
              <div className="flex h-full items-center justify-center">
                <TickCircle size="28" color="#2CB04B" variant="Bulk" />
              </div>
            </td>
            <td
              className={`text-[14px] ${Outfit300.className} text-center text-[#383838]`}
            >
              <div className="flex h-full items-center justify-center">
                <Edit2 size="28" color="#737373" />
              </div>
            </td>
            <td
              className={`text-[14px] ${Outfit300.className} text-center text-[#383838]`}
            >
              <div className="flex h-full items-center justify-center">
                <Book size="28" color="#737373" />
              </div>
            </td>
            <td
              className={`text-[14px] ${Outfit300.className} text-center text-[#383838]`}
            >
              <div className="flex h-full items-center justify-center">
                <More size="28" color="#737373" />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex h-[40px] items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-[40px] w-[61px] items-center rounded-[8px] bg-[#F9F9F9]">
            <span className={`${Outfit400.className} pl-2 text-[16px]`}>
              01
            </span>
          </div>
          <span className={`${Outfit300.className} text-[16px]`}>
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
    </div>
  )
}

export default UnitOfHealth
