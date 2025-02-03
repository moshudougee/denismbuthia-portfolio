
const Footer = () => {
    const year = new Date().getFullYear()
  return (
    <footer className="flex justify-center items-center py-4 m-auto text-gray-700">
        &copy; {`${year} My Portfolio. All rights reserved.`}
    </footer>
  )
}

export default Footer