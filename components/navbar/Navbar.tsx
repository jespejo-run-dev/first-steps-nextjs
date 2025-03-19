
const temporalAsync = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true)
        }, 2000)
    })
}

export const Navbar = async() => {

    await temporalAsync();

  return (
    <nav className="flex bg-[rgba(29,78,216,0.3)] p-2 m-2 rounded">
        <span>Home</span>

        <div className="flex flex-1"></div>

        <a className="mr-2" href="/about">About</a>
        <a className="mr-2" href="/pricing">Pricing</a>
        <a className="mr-2" href="/contact">Contact</a>
     

    </nav>
  )
}
