import PWABadge from './PWABadge.jsx'
import '@/styles/PWABadge.css'
import { useRoutes } from 'react-router-dom'
import routes from './routes.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {

  const route = useRoutes(routes);
  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        {route}
        <PWABadge />
      </QueryClientProvider>
    </>
  )
}

export default App