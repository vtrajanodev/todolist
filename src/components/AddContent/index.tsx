import { useState, KeyboardEvent } from 'react'
import * as C from './styles'

type AddContetProps = {
    onEnter: (taskName: string) => void;
}


export const AddContent = ({ onEnter } : AddContetProps) => {

    const [inputContent, setInputContent] = useState('')

    const handleKeyUp = ( e: KeyboardEvent) => {
        if(e.code === 'Enter' && inputContent !== ''){
            onEnter(inputContent)
            setInputContent('')
        }
    }


    return (

        <C.Container>

            <div className="image">+ </div>
            <input
                type="text"
                placeholder="Adicione uma tarefa"
                value={inputContent}
                onChange={(e => setInputContent(e.target.value))}
                onKeyUp={handleKeyUp}
            />


        </C.Container>

    )
}