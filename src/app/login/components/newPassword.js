'use client'
import { Outfit300, Outfit400, Outfit700 } from '@/fonts'
import { useFormik } from 'formik'
import { CloseSquare, InfoCircle, Key, TickCircle } from 'iconsax-reactjs'
import { useState } from 'react'
import * as Yup from 'yup'

const NewPassword = ({ onClose }) => {
  const [loading, setLoading] = useState(false)
  const [isFocusedPassword, setIsFocusedPassword] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

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

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev)
  }

  return (
    <form
      className="h-[588px] w-[500px] rounded-[12px] bg-white p-[32px]"
      onSubmit={formik.handleSubmit}
    >
      <div className="flex flex-col gap-[24px]">
        <div className="flex items-center justify-between">
          <span className={`${Outfit400.className}`}>NOVA SENHA</span>
          <CloseSquare
            size="32"
            color="#BBBBBB"
            variant="Bulk"
            onClick={() => onClose()}
          />
        </div>

        <div className="flex flex-col gap-[24px]">
          <div className="flex items-center gap-[24px]">
            <TickCircle size="40" color="#2CB04B" variant="Bulk" />
            <div>
              <p className={`${Outfit700.className} text-[16px]`}>
                Código validado com sucesso.
              </p>
              <p className={`${Outfit400.className} text-[16px]`}>
                Digite sua nova senha
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[16px]">
            <div className="">
              <label
                className={`text-[14px] text-[#383838] ${Outfit400.className}`}
              >
                Senha
              </label>
              <div
                className={`flex h-[40px] w-full flex-row items-center justify-between rounded-[8px] border-[1px] px-3 hover:border hover:border-[#00A59D] ${
                  isFocusedPassword ? 'border-[#057B64]' : 'border-[#ABABAB]'
                }`}
              >
                <div className="flex">
                  <Key
                    size="24"
                    color={isFocusedPassword ? '#383838' : '#ABABAB'}
                  />
                  <input
                    {...formik.getFieldProps('password')}
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    className={`${Outfit400.className} ml-3 w-[200px] text-[16px] outline-none`}
                    placeholder="Digite..."
                    onFocus={() => setIsFocusedPassword(true)}
                    onBlur={() => setIsFocusedPassword(false)}
                    disabled={loading}
                  />
                </div>
                <button
                  type="button"
                  className={`text-[16px] text-[#BBBBBB] ${Outfit400.className}`}
                  onClick={togglePasswordVisibility}
                  disabled={loading}
                >
                  {showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                </button>
              </div>
            </div>
            <div className="">
              <label
                className={`text-[14px] text-[#383838] ${Outfit400.className}`}
              >
                Senha
              </label>
              <div
                className={`flex h-[40px] w-full flex-row items-center justify-between rounded-[8px] border-[1px] px-3 hover:border hover:border-[#00A59D] ${
                  isFocusedPassword ? 'border-[#057B64]' : 'border-[#ABABAB]'
                }`}
              >
                <div className="flex">
                  <Key
                    size="24"
                    color={isFocusedPassword ? '#383838' : '#ABABAB'}
                  />
                  <input
                    {...formik.getFieldProps('password')}
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    className={`${Outfit400.className} ml-3 w-[200px] text-[16px] outline-none`}
                    placeholder="Digite..."
                    onFocus={() => setIsFocusedPassword(true)}
                    onBlur={() => setIsFocusedPassword(false)}
                    disabled={loading}
                  />
                </div>
                <button
                  type="button"
                  className={`text-[16px] text-[#BBBBBB] ${Outfit400.className}`}
                  onClick={togglePasswordVisibility}
                  disabled={loading}
                >
                  {showPassword ? 'Ocultar senha' : 'Mostrar senha'}
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[8px]">
            <p className={`${Outfit300.className} text-[13px]`}>
              A senha deve conter:
            </p>

            <div className="flex flex-col gap-[4px]">
              <div className="flex items-center gap-2">
                <InfoCircle size="24" color="#A1A1A1" variant="Bulk" />
                <p className={`${Outfit400.className} text-[13px]`}>
                  Minímo de 8 caracteres
                </p>
              </div>
              <div className="flex items-center gap-2">
                <InfoCircle size="24" color="#A1A1A1" variant="Bulk" />
                <p className={`${Outfit400.className} text-[13px]`}>
                  Mínimo de 1 caractere em letra maiúscula
                </p>
              </div>
              <div className="flex items-center gap-2">
                <InfoCircle size="24" color="#A1A1A1" variant="Bulk" />
                <p className={`${Outfit400.className} text-[13px]`}>
                  Mínimo de 1 caractere numérico
                </p>
              </div>
              <div className="flex items-center gap-2">
                <InfoCircle size="24" color="#A1A1A1" variant="Bulk" />
                <p className={`${Outfit400.className} text-[13px]`}>
                  Mínimo de 1 caractere especial (*\-.,@#$%&=+!)
                </p>
              </div>
              <div className="flex items-center gap-2">
                <InfoCircle size="24" color="#A1A1A1" variant="Bulk" />
                <p className={`${Outfit400.className} text-[13px]`}>
                  Senha deve ser diferente da senha anterior
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          {/* <button
            className={`h-[44px] w-full rounded-[8px] bg-[#E7E7E7] text-[#3E3E3E] transition duration-300 hover:bg-[#222222] hover:text-[#FFF]`}
            type="submit"
            disabled={loading}
          >
            <p className={`text-[16px] ${Outfit400.className}`}>
              REENVIAR LINK
            </p>
          </button> */}

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
              ALTERAR SENHA
            </p>
          </button>
        </div>
      </div>
    </form>
  )
}

export default NewPassword
