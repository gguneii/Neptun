import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import DataContext from './context/DataContext.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <DataContext>
          <App /> 
        </DataContext>
    </BrowserRouter>
)
