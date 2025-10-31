import CustomSelect from '@/components/CustomSelect'
import { Outfit300, Outfit400 } from '@/fonts'
import { InfoCircle } from 'iconsax-reactjs'
import { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

import { listAllActiveBanks, UpdateBankAccount } from '@/helpers'

const InformacoesGerais = forwardRef(({ account, onClose }, ref) => {
  const [activeBanks, setActiveBanks] = useState([])

  // itens payload
  const [bancoId, setBancoId] = useState({
    id: account.banco.id,
    label: `${account.banco.codigo} - ${account.banco.nome}`,
  })
  const [tipoConta, setTipoConta] = useState(
    account.tipo_conta === 'corrente'
      ? { id: 'corrente', label: 'CORRRENTE' }
      : { id: 'poupanca', label: 'POUPANÇA' },
  )
  const [status, setStatus] = useState({ id: 'ativa', label: 'Ativa' })
  const [description, setDescription] = useState(account.observacoes)
  const [agencia, setAgencia] = useState(account.agencia)
  const [digitoAgencia, setDigitoAgencia] = useState(account.digito_agencia)
  const [numeroConta, setNumeroConta] = useState(account.numero_conta)
  const [digitoConta, setDigitoConta] = useState(account.digito_conta)
  const [pixChave, setPixChave] = useState(account.pix_chave)
  const [selectedUnits, setSelectedUnits] = useState([])

  useEffect(() => {
    const findAllBanks = async () => {
      try {
        const response = await listAllActiveBanks()
        const banks = response.data.map((item) => {
          return {
            id: item.id,
            label: `${item.codigo} - ${item.nome}`,
          }
        })
        setActiveBanks(banks)
      } catch (e) {
        console.log(e)
      }
    }

    findAllBanks()
  }, [])

  const handleSubmit = async () => {
    const payload = {
      banco_id: bancoId.id,
      unidade_saude_id: '',
      codigo_interno: account?.codigo_interno,
      nome_conta: '',
      tipo_conta: tipoConta,
      agencia,
      digito_agencia: digitoAgencia,
      numero_conta: numeroConta,
      digito_conta: digitoConta,
      titular: '',
      cpf_cnpj_titular: '',
      pix_tipo: '',
      pix_chave: pixChave,
      status: status.id,
      saldo_inicial: '',
      observacoes: description,
    }

    try {
      const response = await UpdateBankAccount(account.id, payload)
      if (response.success) {
        onClose()
      } else {
        toast.error('Erro ao tentar editar unidade', {
          position: 'top-right',
        })
      }
    } catch (err) {
      console.log(err)
    }
  }

  useImperativeHandle(ref, () => ({
    submitForm: handleSubmit, // ✅ o pai chamará depois
  }))

  return (
    <div className="flex w-full flex-col gap-[32px] rounded bg-[#FFF] p-[48px]">
      <div>
        <div className="flex flex-col gap-[16px]">
          <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
            Informações iniciais
          </span>

          <div className="flex gap-[16px]">
            <div className="flex flex-1 flex-col justify-between">
              <div className="flex gap-[16px]">
                <div className="flex flex-col gap-[4px]">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[#222222]`}
                  >
                    Código interno
                    <strong className="text-[#F23434]">*</strong>
                  </label>
                  <input
                    value={account?.codigo_interno}
                    className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-dashed border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                    placeholder="Digite o código interno"
                    readOnly
                    disabled
                  />
                </div>
                <div className="flex flex-1 flex-col gap-[4px]">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[#222222]`}
                  >
                    Banco
                    <strong className="text-[#F23434]">*</strong>
                  </label>
                  <CustomSelect
                    select={bancoId}
                    setSelect={(e) => setBancoId(e)}
                    options={activeBanks}
                    placeholder={'Selecione o banco'}
                    className={'border border-[#BBBBBB]'}
                  />
                </div>
                <div className="flex flex-1 flex-col gap-[4px]">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[#222222]`}
                  >
                    Descrição
                    <strong className="text-[#F23434]">*</strong>
                  </label>
                  <input
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                    placeholder="Digite uma descrição para a conta"
                  />
                </div>
                <div className="flex flex-col gap-[4px]">
                  <label
                    className={`${Outfit400.className} text-[14px] text-[#222222]`}
                  >
                    Status do banco
                  </label>
                  <CustomSelect
                    select={status}
                    setSelect={(e) => setStatus(e)}
                    options={[
                      { id: 'ativa', label: 'Ativa' },
                      { id: 'inativo', label: 'Inativa' },
                    ]}
                    placeholder={'Selecione uma opção'}
                    className={'border border-[#BBBBBB]'}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* informaçoes da conta */}
        <div className="flex flex-col gap-[16px]">
          <span className={`${Outfit400.className} text-[16px] text-[#0F9B7F]`}>
            Informações da conta
          </span>

          <div className="flex gap-[16px]">
            <div className="flex flex-col gap-[4px]">
              <label
                className={`${Outfit400.className} flex text-[14px] text-[#222222]`}
              >
                Agência
                <strong className="text-red-700">*</strong>
              </label>
              <input
                value={agencia}
                onChange={(e) => setAgencia(e.target.value)}
                className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                placeholder="Número da agência"
              />
            </div>
            <div className="flex flex-col gap-[4px]">
              <label
                className={`${Outfit400.className} flex text-[14px] text-[#222222]`}
              >
                Dígito agência
                <strong className="text-red-700">*</strong>
              </label>
              <input
                value={digitoAgencia}
                onChange={(e) => setDigitoAgencia(e.target.value)}
                className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                placeholder="Número da agência"
              />
            </div>
            <div className="flex flex-1 flex-col gap-[4px]">
              <label
                className={`${Outfit400.className} flex text-[14px] text-[#222222]`}
              >
                Conta
                <strong className="text-red-700">*</strong>
              </label>
              <input
                value={numeroConta}
                onChange={(e) => setNumeroConta(e.target.value)}
                className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                placeholder="Número da conta"
              />
            </div>
            <div className="flex flex-col gap-[4px]">
              <label
                className={`${Outfit400.className} flex text-[14px] text-[#222222]`}
              >
                Dígito verificador
                <strong className="text-red-700">*</strong>
              </label>
              <input
                value={digitoConta}
                onChange={(e) => setDigitoConta(e.target.value)}
                className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                placeholder="Informe o dígito"
              />
            </div>
            <div className="flex flex-1 flex-col gap-[4px]">
              <label
                className={`${Outfit400.className} flex text-[14px] text-[#222222]`}
              >
                Tipo de conta
                <strong className="text-red-700">*</strong>
              </label>
              <CustomSelect
                select={tipoConta}
                setSelect={(e) => setTipoConta(e)}
                options={[
                  { id: 'corrente', label: 'CORRRENTE' },
                  { id: 'poupanca', label: 'POUPANÇA' },
                ]}
                placeholder={'Selecione uma opção'}
                className={'border border-[#BBBBBB]'}
              />
            </div>
            <div className="flex flex-1 flex-col gap-[4px]">
              <label
                className={`${Outfit400.className} flex text-[14px] text-[#222222]`}
              >
                Chave PIX
                <strong className="text-red-700">*</strong>
              </label>
              <input
                value={pixChave}
                onChange={(e) => setPixChave(e.target.value)}
                className={`${Outfit400.className} ring-none flex h-[40px] items-center justify-center rounded-[8px] border-1 border-[#A9A9A9] px-2 text-[#494949] outline-none`}
                placeholder="Digite uma chave PIX"
              />
            </div>
          </div>

          <div className="flex gap-[16px]">
            <div className="flex flex-1 flex-col gap-[4px]">
              <label
                className={`${Outfit400.className} text-[14px] text-[#222222]`}
              >
                Unidades associadas
                <strong className="text-[#F23434]">*</strong>
              </label>
              <CustomSelect
                select={selectedUnits}
                setSelect={(e) => setSelectedUnits(e)}
                options={[
                  { id: 1, label: '1' },
                  { id: 2, label: '2' },
                ]}
                placeholder={'Selecione uma ou mais unidades'}
                className={'border border-[#BBBBBB]'}
              />
            </div>
            <div className="flex flex-col justify-end gap-[4px]">
              <button
                className={`${Outfit400.className} flex h-[40px] w-[112px] items-center justify-center rounded-[8px] border border-[#0F9B7F] text-[16px] text-[#0F9B7F]`}
              >
                ADICIONAR
              </button>
            </div>
            <div className="flex flex-1 flex-col justify-end gap-[4px]">
              <div className="flex h-[40px] items-center gap-2 rounded-[50px] bg-[#E7E7E7] px-3">
                <InfoCircle size="20" color="#737373" variant="Bulk" />
                <label
                  className={`${Outfit300.className} text-[14px] text-[#737373]`}
                >
                  Nenhuma opção adicionada
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  )
})

InformacoesGerais.displayName = 'ChildComponent'

export default InformacoesGerais
