import { StrictMode } from 'react'
import { BrowserRouter} from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { ClerkProvider} from '@clerk/react-router'

import './index.css'
import App from './App.tsx'

const PUBLISHABLE_KEY=import.meta.env.VITE_CLERK_PUBLISHABLE_KEY



createRoot(document.getElementById('root')!).render(

    <BrowserRouter>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <App/>
     </ClerkProvider>
    </BrowserRouter>
    
    
  

)
