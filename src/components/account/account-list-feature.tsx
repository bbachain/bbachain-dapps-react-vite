import { useWallet } from '@bbachain/wallet-adapter-react'
import { Navigate } from 'react-router'
import { WalletButton } from '../contexts/bbachain-provider'

export default function AccountListFeature() {
  const { publicKey } = useWallet()

  if (publicKey) {
    return <Navigate to={`/account/${publicKey.toString()}`} replace />
  }

  return (
    <div className="hero py-[64px]">
      <div className="hero-content text-center">
        <WalletButton />
      </div>
    </div>
  )
}
