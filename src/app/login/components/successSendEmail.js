'use client'
import { Outfit400, Outfit700 } from '@/fonts'
import { useFormik } from 'formik'
import { CloseSquare, TickCircle } from 'iconsax-reactjs'
import { useState } from 'react'
import * as Yup from 'yup'

const SucessSendEmail = ({ onClose }) => {
  const [loading, setLoading] = useState(false)

  const SignInSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email inválido')
      .required('O email é obrigatório'),
  })

  const formik = useFormik({
    validationSchema: SignInSchema,
    validateOnBlur: true,
    validateOnChange: true,
    initialValues: {
      emailForgotPassword: '',
    },
    onSubmit: async () => {
      setLoading(true)

      // const responseLogin = await Login({
      //   email: values.email,
      //   password: values.password,
      // })

      // if (responseLogin.success) {
      //   login(responseLogin.data.access_token)
      //   defineUser(responseLogin.data.user)
      //   router.push('/atendimento/pacientes')
      // }

      setLoading(false)
    },
  })

  return (
    <form
      className="h-[236px] w-[500px] rounded-[12px] bg-white p-[32px]"
      onSubmit={formik.handleSubmit}
    >
      <div className="flex flex-col gap-[24px]">
        <div className="flex items-center justify-between">
          <span className={`${Outfit400.className}`}>RECUPERAR SENHA</span>
          <CloseSquare
            size="32"
            color="#BBBBBB"
            variant="Bulk"
            onClick={() => onClose()}
          />
        </div>

        <div className="flex items-center gap-2">
          <TickCircle size="40" color="#2CB04B" variant="Bulk" />
          <div>
            <p className={`${Outfit700.className} text-[16px]`}>
              Email enviado com sucesso.
            </p>
            <p className={`${Outfit400.className} text-[16px]`}>
              Confira seu e-mail para verificar o código enviado
            </p>
          </div>
        </div>

        <div className="flex gap-2">
          <button
            className={`h-[44px] w-full rounded-[8px] bg-[#E7E7E7] text-[#3E3E3E] transition duration-300 hover:bg-[#222222] hover:text-[#FFF]`}
            type="submit"
            disabled={loading}
          >
            <p className={`text-[16px] ${Outfit400.className}`}>
              REENVIAR LINK
            </p>
          </button>

          <button
            className={`${
              formik.isValid
                ? 'bg-[#0F9B7F] text-[#023D4F] hover:bg-[#057B64]'
                : 'bg-[#A9A9A9]'
            } h-[44px] w-full rounded-[8px] transition duration-300`}
            type="submit"
            disabled={loading}
          >
            <p
              className={`text-[16px] ${Outfit400.className} ${
                formik.isValid ? 'text-white' : 'text-[#383838]'
              }`}
            >
              JÁ RECEBI O CÓDIGO
            </p>
          </button>
        </div>
      </div>
    </form>
  )
}

export default SucessSendEmail
