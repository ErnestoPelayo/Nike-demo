import image  from '/logow.png'

const Header = () => {
  return (
    <div className="w-5/6 mx-auto p-6 flex justify-between">
        <img draggable={false} src={image} alt="image logo" className='h-10' />
        <div className='flex items-center gap-x-16  text-white text-sm font-bold'>
            <p className='cursor-pointer hover:underline'>Women</p>
            <p className='cursor-pointer hover:underline'>Kids</p>
            <p className='cursor-pointer hover:underline'>Shopping</p>
            <p className='cursor-pointer hover:underline'>Shop All</p>
        </div>

        <div className='flex items-center gap-2  text-white font-bold'>
            <i className='bx bx-cart bx-md'></i>
            <i className='bx bx-user bx-md'></i>
        </div>
    </div>
  )
}

export default Header
