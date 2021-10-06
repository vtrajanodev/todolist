import * as C from './styles'
import { Item } from '../../types/item'
import { useState } from 'react'


type listItemProps = {
    item: Item
}


export const ListItem = ({ item }: listItemProps) => {

    const [isChecked, setIsChecked] = useState(item.done)





    return (
        <C.Container done={isChecked}>
            <input
                type="checkbox"
                checked={isChecked}
                onChange={e => setIsChecked(e.target.checked)}
                id="complete"
            />
            <label htmlFor="complete">
                {item.name}
            </label>
        </C.Container>
    )
}