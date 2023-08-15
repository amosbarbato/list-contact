import { EditAndAll, RemoveAndCancel } from "../../styles"
import { Actions, Card, CardEmail, CardInfo, CardName, CardPhone, Icon, Separator } from "./styles"
import { BsFillPersonFill } from 'react-icons/bs'
import { FaRegTrashCan, FaPenToSquare } from 'react-icons/fa6'

const Contact = ({ id, name, phone, email, onDelete, onEdit }) => (
  <Card>
    <div className="item">
      <Icon>
        <BsFillPersonFill />
      </Icon>
      <CardInfo>
        <CardName>{name}</CardName>
        <CardPhone>{phone}</CardPhone>
        <CardEmail>{email}</CardEmail>
      </CardInfo>
    </div>
    <Actions>
      <RemoveAndCancel type="button" onClick={() => {onDelete(id)}}>
        <FaRegTrashCan />
        <span>
          Apagar
        </span>
      </RemoveAndCancel>
      <Separator />
      <EditAndAll type="button" onClick={()=> onEdit({ id, name, phone, email, })}>
        <FaPenToSquare />
        <span>
          Editar
        </span>
      </EditAndAll>
    </Actions>
  </Card>
)

export default Contact
