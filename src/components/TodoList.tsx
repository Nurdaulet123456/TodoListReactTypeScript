import React, { useState } from 'react'
import { ITodo } from '../interfaces'

type TodoListProps = {
  todos: ITodo[]
  onToggle(id: number): void
  onRemove: (id: number) => void
}

const buttons: any[] = [
  {
    type: 'all',
    label: 'All'
  },

  {
    type: 'active',
    label: 'Active'
  },

  {
    type: 'completed',
    label: 'Completed'
  },
]

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  onRemove,
  onToggle
}) => {
  const [filterType, setFilterType] = useState('all')

  if (todos.length === 0) {
    return <p className="center">Пока дел нет!</p>
  }


  const removeHandler = (event: React.MouseEvent, id: number) => {
    event.preventDefault()
    onRemove(id)
  }

  const filterTypeHandler = ({type}: any) => {
    if (type === 'all') {
      return todos
    }

    else if (type === 'active') {
      return todos.filter(item => item.completed)
    }
  } 

  const filteredArray =
    filterType === "all" ? todos :
      filterType === "done" ? todos.filter((item) => item.completed) : todos.filter((item) => !item.completed);


  return (
    <>
      <ul>
      {filteredArray.map(todo => {
        const classes = ['todo']
        if (todo.completed) {
          classes.push('completed')
        }

        return (
          <li className={classes.join(' ')} key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={onToggle.bind(null, todo.id)}
              />
              <span>{todo.title}</span>
              <i
                className="material-icons red-text"
                onClick={event => removeHandler(event, todo.id)}
              >
                delete
              </i>
            </label>
          </li>
        )
      })}
    </ul>

    <div style={{display: 'flex', justifyContent: 'flex-end'}}>
    {
      buttons.map((btn) => {
        return(
          
            <button className='btn' key={btn.type} style={{marginLeft: '10px'}} onClick={() => filterTypeHandler(btn.type)}>{btn.label}</button>
            )
          })
        }
    </div>
    </>
  )
}
