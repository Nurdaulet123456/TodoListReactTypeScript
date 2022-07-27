import React from 'react'
import { TodosPage } from './pages/TodosPage'

const App: React.FC = () => {
  return (
      <div className="container">
        <h1 style={{fontSize: '40px', textAlign: 'center', marginBottom: '10px', color: 'red'}}>Todos</h1>
        <TodosPage />
      </div>
  )
}

export default App
