import { useEffect, useState } from 'react'

const TicketButton = ({ url, saleStart }: { url: string; saleStart: Date }) => {
  const [countdown, setCountdown] = useState('')
  const [currentTime, setCurrentTime] = useState(new Date().getTime())

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().getTime())
      const timeDifference = saleStart.getTime() - currentTime

      if (timeDifference > 0) {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
        const hours = Math.floor(
          (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )
        const minutes = Math.floor(
          (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
        )
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)

        setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`)
      } else {
        setCountdown('Sale has started!')
        clearInterval(interval)
      }
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [saleStart])

  return (
    <a
      className="border-2 rounded-3xl text-center text-2xl min-w-64 mt-4 py-2 px-4 bg-blue-700 text-white hover:bg-blue-800"
      href={url}
      target="_blank"
    >
      {saleStart.getTime() > currentTime ? 'Lipunmyyntiin' : 'Liput'}
      {saleStart.getTime() > currentTime ? (
        <div>{countdown}</div>
      ) : (
        <div>tästä</div>
      )}
    </a>
  )
}

export default TicketButton
