import { useState } from 'react'
import { Item } from './types/item'
import { ListItem } from './components/ListItem'
import { AddContent } from './components/AddContent'
import * as C from './App.styles'



function App() {

  const [list, setList] = useState<Item[]>([

    {
      id: 1,
      name: 'Finalizar projeto 1',
      done: false
    },
    {
      id: 2,
      name: 'Finalizar projeto 2',
      done: false
    }
  ])

  const handleAddTask = (taskName: string) => {
    let newList = [...list]
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false
    })

    setList(newList)
  }

  return (
    <C.Container>
      <C.Main>
        <C.Header>Lista de tarefas</C.Header>

        <AddContent onEnter={handleAddTask}/>

       {list.map((item, index) => (
         <ListItem key={index} item={item} />
       ))}

      </C.Main>
    </C.Container>
  );
}

export default App;
