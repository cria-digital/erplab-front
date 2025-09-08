'use client'
import { Outfit400 } from '@/fonts'
import { AddSquare, ArrowDown2, ArrowUp2 } from 'iconsax-reactjs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const RootLayout = ({ children }) => {
  const [openMenuPrincipais, setOpenMenuPrincipais] = useState(true)
  const [openMenuEstrutura, setOpenMenuEstrutura] = useState(true)
  const [openMenuDocumentacao, setOpenMenuDocumentacao] = useState(true)
  const [openMenuFiananceiro, setOpenMenuFiananceiro] = useState(true)
  const [openMenuOutros, setOpenMenuOutros] = useState(true)
  const pathname = usePathname()

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
          // onClick={() => setOpenModalAddPatient(true)}
          className={`mr-[32px] flex h-[44px] w-[154px] items-center justify-center gap-2 rounded-[8px] bg-[#0F9B7F]`}
        >
          <AddSquare size="32" color="#ffffff" variant="Bulk" />
          <span className={`${Outfit400.className} text-[16px] text-white`}>
            CADASTRAR
          </span>
        </button>
      </div>
      <div className="mx-[48px] my-[16px] flex gap-3">
        <div className="w-[281px] rounded-[8px] bg-[#F9F9F9] p-[16px]">
          <div className="flex h-[24px] items-center justify-between">
            <text className={`${Outfit400.className} text-[#222222]`}>
              Principais
            </text>
            {openMenuPrincipais ? (
              <ArrowUp2
                size="28"
                color="#A1A1A1"
                onClick={() => setOpenMenuPrincipais(!openMenuPrincipais)}
              />
            ) : (
              <ArrowDown2
                size="28"
                color="#A1A1A1"
                onClick={() => setOpenMenuPrincipais(!openMenuPrincipais)}
              />
            )}
          </div>
          {openMenuPrincipais && (
            <div className="mt-[8px] flex flex-col gap-[4px]">
              <Link
                href="/configuracoes/cadastros-gerais/unidades-de-saude"
                className={`flex h-[40px] items-center rounded-[4px] px-[8px] ${
                  pathname ===
                  '/configuracoes/cadastros-gerais/unidades-de-saude'
                    ? 'bg-[#0F9B7F] text-white'
                    : 'text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white'
                }`}
              >
                <text className={`${Outfit400.className} `}>
                  Unidades de Saúde
                </text>
              </Link>
              <Link
                href="/configuracoes/cadastros-gerais/exames"
                className={`flex h-[40px] items-center rounded-[4px] px-[8px] ${
                  pathname === '/configuracoes/cadastros-gerais/exames'
                    ? 'bg-[#0F9B7F] text-white'
                    : 'text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white'
                }`}
              >
                <text className={`${Outfit400.className} `}>Exames</text>
              </Link>
              <Link
                href="/configuracoes/cadastros-gerais/matriz-de-exames"
                className={`flex h-[40px] items-center rounded-[4px] px-[8px] ${
                  pathname ===
                  '/configuracoes/cadastros-gerais/matriz-de-exames'
                    ? 'bg-[#0F9B7F] text-white'
                    : 'text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white'
                }`}
              >
                <text className={`${Outfit400.className} `}>
                  Matrizes de exames
                </text>
              </Link>
              <Link
                href="/configuracoes/cadastros-gerais/profissionais"
                className={`flex h-[40px] items-center rounded-[4px] px-[8px] ${
                  pathname === '/configuracoes/cadastros-gerais/profissionais'
                    ? 'bg-[#0F9B7F] text-white'
                    : 'text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white'
                }`}
              >
                <text className={`${Outfit400.className} `}>Profissionais</text>
              </Link>
              <Link
                href="/configuracoes/cadastros-gerais/usuarios"
                className={`flex h-[40px] items-center rounded-[4px] px-[8px] ${
                  pathname === '/configuracoes/cadastros-gerais/usuarios'
                    ? 'bg-[#0F9B7F] text-white'
                    : 'text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white'
                }`}
              >
                <text className={`${Outfit400.className} `}>Usuários</text>
              </Link>
              <Link
                href="/configuracoes/cadastros-gerais/agendas"
                className={`flex h-[40px] items-center rounded-[4px] px-[8px] ${
                  pathname === '/configuracoes/cadastros-gerais/agendas'
                    ? 'bg-[#0F9B7F] text-white'
                    : 'text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white'
                }`}
              >
                <text className={`${Outfit400.className} `}>Agendas</text>
              </Link>
              <Link
                href="/configuracoes/cadastros-gerais/metodos"
                className={`flex h-[40px] items-center rounded-[4px] px-[8px] ${
                  pathname === '/configuracoes/cadastros-gerais/metodos'
                    ? 'bg-[#0F9B7F] text-white'
                    : 'text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white'
                }`}
              >
                <text className={`${Outfit400.className} `}>Metodos</text>
              </Link>
              <Link
                href="/configuracoes/cadastros-gerais/amostras"
                className={`flex h-[40px] items-center rounded-[4px] px-[8px] ${
                  pathname === '/configuracoes/cadastros-gerais/amostras'
                    ? 'bg-[#0F9B7F] text-white'
                    : 'text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white'
                }`}
              >
                <text className={`${Outfit400.className} `}>Amostras</text>
              </Link>
              <Link
                href="/configuracoes/cadastros-gerais/kits"
                className={`flex h-[40px] items-center rounded-[4px] px-[8px] ${
                  pathname === '/configuracoes/cadastros-gerais/kits'
                    ? 'bg-[#0F9B7F] text-white'
                    : 'text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white'
                }`}
              >
                <text className={`${Outfit400.className} `}>Kits</text>
              </Link>
            </div>
          )}

          <div className="mt-[16px] flex h-[24px] items-center justify-between">
            <text className={`${Outfit400.className} text-[#222222]`}>
              Estrutura
            </text>
            {openMenuEstrutura ? (
              <ArrowUp2
                size="28"
                color="#A1A1A1"
                onClick={() => setOpenMenuEstrutura(!openMenuEstrutura)}
              />
            ) : (
              <ArrowDown2
                size="28"
                color="#A1A1A1"
                onClick={() => setOpenMenuEstrutura(!openMenuEstrutura)}
              />
            )}
          </div>
          {openMenuEstrutura && (
            <div className="mt-[8px] flex flex-col gap-[4px]">
              <div className="flex h-[40px] items-center rounded-[4px] px-[8px] text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white">
                <text className={`${Outfit400.className} `}>
                  Salas / Setores
                </text>
              </div>
              <div className="flex h-[40px] items-center rounded-[4px] px-[8px] text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white">
                <text className={`${Outfit400.className} `}>
                  Equipamentos / Imobilizados
                </text>
              </div>
              <div className="flex h-[40px] items-center rounded-[4px] px-[8px] text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white">
                <text className={`${Outfit400.className} `}>
                  Etiquetas para amostra
                </text>
              </div>
            </div>
          )}

          <div className="mt-[16px] flex h-[24px] items-center justify-between">
            <text className={`${Outfit400.className} text-[#222222]`}>
              Documentação
            </text>
            {openMenuDocumentacao ? (
              <ArrowUp2
                size="28"
                color="#A1A1A1"
                onClick={() => setOpenMenuDocumentacao(!openMenuDocumentacao)}
              />
            ) : (
              <ArrowDown2
                size="28"
                color="#A1A1A1"
                onClick={() => setOpenMenuDocumentacao(!openMenuDocumentacao)}
              />
            )}
          </div>
          {openMenuDocumentacao && (
            <div className="mt-[8px] flex flex-col gap-[4px]">
              <div className="flex h-[40px] items-center rounded-[4px] px-[8px] text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white">
                <text className={`${Outfit400.className} `}>
                  Cabeçalhos / Ropdapés
                </text>
              </div>
              <div className="flex h-[40px] items-center rounded-[4px] px-[8px] text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white">
                <text className={`${Outfit400.className} `}>
                  Formulários de atendimento
                </text>
              </div>
            </div>
          )}

          <div className="mt-[16px] flex h-[24px] items-center justify-between">
            <text className={`${Outfit400.className} text-[#222222]`}>
              Financeiro
            </text>
            {openMenuFiananceiro ? (
              <ArrowUp2
                size="28"
                color="#A1A1A1"
                onClick={() => setOpenMenuFiananceiro(!openMenuFiananceiro)}
              />
            ) : (
              <ArrowDown2
                size="28"
                color="#A1A1A1"
                onClick={() => setOpenMenuFiananceiro(!openMenuFiananceiro)}
              />
            )}
          </div>
          {openMenuFiananceiro && (
            <div className="mt-[8px] flex flex-col gap-[4px]">
              <div className="flex h-[40px] items-center rounded-[4px] px-[8px] text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white">
                <text className={`${Outfit400.className} `}>Bancos</text>
              </div>
              <div className="flex h-[40px] items-center rounded-[4px] px-[8px] text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white">
                <text className={`${Outfit400.className} `}>Adquirentes</text>
              </div>
              <div className="flex h-[40px] items-center rounded-[4px] px-[8px] text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white">
                <text className={`${Outfit400.className} `}>
                  Hierarquia CFO
                </text>
              </div>
            </div>
          )}

          <div className="mt-[16px] flex h-[24px] items-center justify-between">
            <text className={`${Outfit400.className} text-[#222222]`}>
              Outros
            </text>
            {openMenuOutros ? (
              <ArrowUp2
                size="28"
                color="#A1A1A1"
                onClick={() => setOpenMenuOutros(!openMenuOutros)}
              />
            ) : (
              <ArrowDown2
                size="28"
                color="#A1A1A1"
                onClick={() => setOpenMenuOutros(!openMenuOutros)}
              />
            )}
          </div>
          {openMenuOutros && (
            <div className="mt-[8px] flex flex-col gap-[4px]">
              <div className="flex h-[40px] items-center rounded-[4px] px-[8px] text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white">
                <text className={`${Outfit400.className} `}>
                  Importação de tabelas
                </text>
              </div>
              <div className="flex h-[40px] items-center rounded-[4px] px-[8px] text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white">
                <text className={`${Outfit400.className} `}>Integrações</text>
              </div>
              <div className="flex h-[40px] items-center rounded-[4px] px-[8px] text-[#8A8A8A] hover:bg-[#0F9B7F] hover:text-white">
                <text className={`${Outfit400.className} `}>
                  Campos do formulário
                </text>
              </div>
            </div>
          )}
        </div>
        <main>{children}</main>
      </div>
    </div>
  )
}
export default RootLayout
