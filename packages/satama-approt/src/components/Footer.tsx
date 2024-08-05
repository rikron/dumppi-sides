type Props = {
  year?: number
  color?: string
}

const Footer = ({ year, color }: Props) => {
  if (!year) {
    year = new Date().getFullYear()
  }
  return (
    <footer
      style={{ backgroundColor: color, color: '#bfbfbf' }}
      className="w-full p-4 text-center"
    >
      <p>© {year} Satama-Approt</p>
    </footer>
  )
}

export default Footer
