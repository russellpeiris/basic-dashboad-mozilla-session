import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ConfigProvider, theme } from 'antd'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ConfigProvider
    theme={{
      algorithm: theme.defaultAlgorithm,
      token: {
        colorBgContainer: '#f5f5f5',
        colorPrimary: "#01a460",
      },
      components: {
        Input: {
          fontFamily: 'Lexend, sans-serif',
        },
      }
    }}
   >
      <App/>
   </ConfigProvider>
  </React.StrictMode>,
)
