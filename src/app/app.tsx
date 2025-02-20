import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ClusterProvider } from '../components/cluster/cluster-data-access'
import { BBAChainProvider } from '../components/contexts/bbachain-provider'
import { AppRoutes } from './app-routes'

const client = new QueryClient()

export function App() {
  return (
    <QueryClientProvider client={client}>
      <ClusterProvider>
        <BBAChainProvider>
          <AppRoutes />
        </BBAChainProvider>
      </ClusterProvider>
    </QueryClientProvider>
  )
}
