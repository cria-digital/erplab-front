import {
  ArchiveBox,
  Arrow,
  Buildings,
  Calendar,
  ChemicalGlass,
  Gift,
  Grid1,
  Heart,
  Profile2User,
} from 'iconsax-reactjs'

import { Outfit400 } from '@/fonts'

const Principais = () => {
  return (
    <div className="flex flex-col gap-[8px]">
      <div className="flex gap-[8px]">
        <div className="flex h-[84px] flex-1 flex-col justify-between rounded-[8px] bg-[#F9F9F9] p-[12px]">
          <Buildings size="28" color="#737373" variant="TwoTone" />
          <span className={`${Outfit400.className} text-[16px] text-[#494949]`}>
            Unidades
          </span>
        </div>
        <div className="flex h-[84px] flex-1 flex-col justify-between rounded-[8px] bg-[#F9F9F9] p-[12px]">
          <Heart size="28" color="#737373" variant="TwoTone" />
          <span className={`${Outfit400.className} text-[16px] text-[#494949]`}>
            Exames
          </span>
        </div>
        <div className="flex h-[84px] flex-1 flex-col justify-between rounded-[8px] bg-[#F9F9F9] p-[12px]">
          <Grid1 size="28" color="#737373" variant="TwoTone" />
          <span className={`${Outfit400.className} text-[16px] text-[#494949]`}>
            Matrizes
          </span>
        </div>
        <div className="flex h-[84px] flex-1 flex-col justify-between rounded-[8px] bg-[#F9F9F9] p-[12px]">
          <Profile2User size="28" color="#737373" variant="TwoTone" />
          <span className={`${Outfit400.className} text-[16px] text-[#494949]`}>
            Profissionais
          </span>
        </div>
      </div>
      <div className="flex gap-[8px]">
        <div className="flex h-[84px] flex-1 flex-col justify-between rounded-[8px] bg-[#F9F9F9] p-[12px]">
          <Profile2User size="28" color="#737373" variant="TwoTone" />
          <span className={`${Outfit400.className} text-[16px] text-[#494949]`}>
            Usuários
          </span>
        </div>
        <div className="flex h-[84px] flex-1 flex-col justify-between rounded-[8px] bg-[#F9F9F9] p-[12px]">
          <Calendar size="28" color="#737373" variant="TwoTone" />
          <span className={`${Outfit400.className} text-[16px] text-[#494949]`}>
            Agendas
          </span>
        </div>
        <div className="flex h-[84px] flex-1 flex-col justify-between rounded-[8px] bg-[#F9F9F9] p-[12px]">
          <ArchiveBox size="28" color="#737373" variant="TwoTone" />
          <span className={`${Outfit400.className} text-[16px] text-[#494949]`}>
            Materias/Insulmos
          </span>
        </div>
        <div className="flex h-[84px] flex-1 flex-col justify-between rounded-[8px] bg-[#F9F9F9] p-[12px]">
          <Arrow size="28" color="#737373" variant="TwoTone" />
          <span className={`${Outfit400.className} text-[16px] text-[#494949]`}>
            Métodos
          </span>
        </div>
      </div>
      <div className="flex gap-[8px]">
        <div className="flex h-[84px] flex-1 flex-col justify-between rounded-[8px] bg-[#F9F9F9] p-[12px]">
          <ChemicalGlass size="28" color="#737373" variant="TwoTone" />
          <span className={`${Outfit400.className} text-[16px] text-[#494949]`}>
            Amostras
          </span>
        </div>
        <div className="flex h-[84px] flex-1 flex-col justify-between rounded-[8px] bg-[#F9F9F9] p-[12px]">
          <Gift size="28" color="#737373" variant="TwoTone" />
          <span className={`${Outfit400.className} text-[16px] text-[#494949]`}>
            Kits
          </span>
        </div>
      </div>
    </div>
  )
}

export default Principais
