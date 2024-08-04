import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './game_room.tsx'
import './index.css'
import { GameRoom } from './game_room-v2.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GameRoom />
  </React.StrictMode>,
)
