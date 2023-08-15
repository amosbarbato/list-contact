import { useEffect, useState } from "react";

import Contact from "./components/contact";
import HeaderForm from "./components/headerForm";
import { Container, Global, Main } from "./styles";

const api =  'https://fake-api-tau.vercel.app/api/contatos'

const App = () => {
  const [contact, setContact] = useState([])
  const [editing, setEditing] = useState(null);

  const getContact = async () => {
    const items = await (await fetch(api)).json()
    setContact(items.data)
  }

  const deleteContact = async (id) => {
    const items = await (await fetch(api, {
      method: 'DELETE',
      body: JSON.stringify({ id }),
    })).json()
    setContact(items.data)
  }

  const postContact = async (item) => {
    const items = await (await fetch(api, {
      method: 'POST',
      body: JSON.stringify({ contato: item }),
    })).json()
    setContact(items.data)
  }

  const editContact = async (item) => {
    const items = await (await fetch(api, {
      method: 'PUT',
      body: JSON.stringify({ contato: item }),
    })).json()
    setEditing(null)
    setContact(items.data)
  }

  useEffect(() => {
    getContact()
  }, [])



  return (
    <div>
      <Global />
      <Container>
        <HeaderForm count={contact.length} onEdit={editContact} onCancelEdit={() => setEditing(null)} edit={editing} onSubmit={postContact}/>
        <Main>
          {contact.map(({ id, email, name, phone }) => (
            <Contact key={id} id={id} email={email} name={name} phone={phone} onDelete={deleteContact} onEdit={setEditing}/>
          ))}
        </Main>
      </Container>
    </div>
  )
}

export default App;
