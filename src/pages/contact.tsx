import React, { useState } from 'react'
import Head from 'next/head'
import { toast } from 'react-toastify'

import { Wrapper, InputBox } from '../styles/pages/Contact'

type FormDataProps = {
  name: string
  senderMail: string
  message: string
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormDataProps>({
    name: '',
    senderMail: '',
    message: ''
  })

  const { name, senderMail, message } = formData

  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = async event => {
    event.preventDefault()

    if (!name || !senderMail || !message) {
      toast.error('Preencha todos os campos!')
      return
    }

    try {
      console.log(formData)
      toast.success('Mensagem enviado com sucesso')

      setFormData({
        name: '',
        senderMail: '',
        message: ''
      })
    } catch (error) {
      toast.error(
        'Ocorreu um erro ao tentar enviar sua mensagem. Tente novamente mais tarde!'
      )
    }
  }

  return (
    <>
      <Head>
        <title>Contato | Portfólio</title>
      </Head>
      <Wrapper onSubmit={handleSubmit}>
        <h1>Entre em contato</h1>

        <InputBox>
          <label>Nome</label>
          <input
            onChange={handleChange}
            value={name}
            placeholder="Seu nome"
            type="text"
            name="name"
          />
        </InputBox>
        <InputBox>
          <label>Email</label>
          <input
            onChange={handleChange}
            value={senderMail}
            placeholder="Seu email"
            type="email"
            name="senderMail"
          />
        </InputBox>
        <InputBox>
          <label>Mensagem</label>
          <textarea
            onChange={handleChange}
            value={message}
            placeholder="Escreva sobre seu projeto. Como posso ajudar você?"
            name="message"
          />
        </InputBox>

        <button type="submit">Enviar</button>
      </Wrapper>
    </>
  )
}

export default Contact
