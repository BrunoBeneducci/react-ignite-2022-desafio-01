import { useState } from 'react';
import iconClipboard from '../../assets/icon-clipboard.svg';
import iconTrash from '../../assets/icon-trash.svg';
import './style.css';

interface List {
  id: number;
  content: string;
  isComplete: boolean;
}

const ListTasks = () => {
    const [input, setInput] = useState(''); 
    const [tasks, setTasks] = useState<List[]>([
      {
        id: 0,
        content: 'Lorem ipsum 0',
        isComplete: true
      },
      {
        id: 1,
        content: 'Lorem ipsum 1',
        isComplete: false
      },
      {
        id: 2,
        content: 'Lorem ipsum 2',
        isComplete: false
      }
    ]);   

    const handleChangeStatus = (id: number) => {
      const selectedTask = tasks.find(item => item.id === id);
      console.log('selectedTask', selectedTask);
      selectedTask && (selectedTask.isComplete = !selectedTask.isComplete);
      setTasks([...tasks]);
    }

    const handleRemoveItem = (id: number) => {
      const newTasksList = tasks.filter((item) => item.id !== id);
      setTasks(newTasksList);
    }
  
    const handleFormSubmit = (e: any) => {
      e.preventDefault();
  
      if(input.length > 0) {
        const newItemList = [...tasks, {
          id: Math.random(),
          content: input,
          isComplete: false
        }];

        setTasks(newItemList);
        setInput('');
      }
    }

    return (
      <div className="container">

        <form onSubmit={handleFormSubmit} className='input-task'>
          <input type='text' value={input} onChange={e => setInput(e.target.value)} placeholder='Adicione uma nova tarefa' />
          <button className='btn' type="submit">Criar</button>
        </form>

        <div className='list-tasks'>
          <div className="list-tasks-header">
            <div className="list-tasks-header-left">
              Tarefas criadas <span>{tasks.length}</span>
            </div>

            <div className="list-tasks-header-right">
              Concluídas <span>{tasks.filter(item => item.isComplete).length} de {tasks.length}</span>
            </div>
          </div>

          <div className="list-tasks-content">

            <div className="list-tasks-content-empty">
              {tasks.length === 0 &&
                <>
                  <img src={iconClipboard} alt="" />
                  <p><b>Você ainda não tem tarefas cadastradas</b> <br/> Crie tarefas e organize seus itens a fazer</p>
                </>
              }
            </div>

            {tasks.length > 0 && 
              tasks.map(item => (
                <div className={`list-tasks-content-item ${item.isComplete && 'list-tasks-content-item-active'}`} key={item.id}>
                  <div className='list-tasks-content-item-status' onClick={() => handleChangeStatus(item.id)}></div>
                  <p>{item.content}</p>
                  <img src={iconTrash} alt="Icone de lixeira" className='list-tasks-content-item-icon' onClick={() => handleRemoveItem(item.id)} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
    )
}

export default ListTasks;