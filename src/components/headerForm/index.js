import { useEffect, useState } from 'react'

import { Button, RemoveAndCancel, SaveAndChange } from "../../styles"
import { ActionsHead, Form, Header, Input } from "./styles"

import { FaEraser, FaRegFloppyDisk, FaSquarePlus } from 'react-icons/fa6'
import { Separator } from '../contact/styles'

const HeaderForm = ({ onSubmit, edit, onCancelEdit, onEdit, count }) => {

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    if (edit) {
        setName(edit.name)
        setPhone(edit.phone)
        setEmail(edit.email)
    } else {
        setName('')
        setPhone('')
        setEmail('')
    }
}, [edit])

  return (
    <div>
      <Header>
        <h1>Contact Form</h1>
        <h3>{count} contatos na agenda</h3>
      </Header>
      <Form onSubmit={(e) => {
        e.preventDefault();

        if (edit) {
          onEdit({ name, phone, email, id: edit.id, })
        } else {
          onSubmit({ name, phone, email, })
        }

        setName('')
        setEmail('')
        setPhone('')
        }}>
        <Input type="text" placeholder="Nome" required value={name} onChange={({ target }) => setName(target.value)}/>
        <Input type="email" placeholder="Email" required value={email} onChange={({ target }) => setEmail(target.value)}/>
        <Input type="tel" placeholder="Telefone" required value={phone} onChange={({ target }) => setPhone(target.value)}/>
        <div>
          {edit ? (
            <ActionsHead>
              <SaveAndChange type="submit">
                <FaRegFloppyDisk />
                <span>
                  Salvar
                </span>

              </SaveAndChange>
              <Separator />
              <RemoveAndCancel type="submit" onClick={onCancelEdit}>
                <FaEraser />
                <span>
                  Cancelar
                </span>
              </RemoveAndCancel>
            </ActionsHead>
          ) : (
            <Button type="submit"><FaSquarePlus />Adicionar</Button>
          )}
        </div>
      </Form>
    </div>
  )
}

export default HeaderForm
