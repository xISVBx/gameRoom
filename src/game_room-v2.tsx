import 'react-circular-progressbar/dist/styles.css';

const Carta = () => {
  return (
    <div className='relative w-32 h-64 rounded-2xl flex flex-col'>
      <div className='w-full h-6 flex justify-center items-center'>
        <div className='absolute bg-yellow-200 -top-3 h-8 aspect-square rotate-45 border-2 border-black'/>
      </div>
      <div className='w-full h-10'>
        <span className='h-5 py-1 text-sm flex justify-center items-center'>Jugador 1</span>
        <div className='h-5 w-full flex flex-col items-center'>
          <div className='h-full w-44 bg-red-200 border-2 border-black rounded-md'>
            <div className='h-full w-36 bg-green-200 border-r-2 border-black rounded-md'/>
          </div>
        </div>
      </div>
      <div className='w-32 h-48 p-1'>
        <div className='w-full h-full rounded-2xl bg-red-200 border-2 border-black'>

        </div>
        <div className='w-full'>

        </div>
      </div>
    </div>
  )
}

export const GameRoom = () => {
  return (
    <div className="h-screen w-screen bg-blue-500">

      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[60%] rounded-full bg-yellow-300'>

      </div>

      <div className='absolute bottom-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-56 bg-green-300 rounded-2xl'>

      </div>

      <div className='absolute top-[35%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[60%] flex'>
        <div className='flex-1 flex justify-center'>
          <Carta />
        </div>
        <div className='flex-1 flex justify-center'>
          <Carta />
        </div>
        <div className='flex-1 flex justify-center'>
          <Carta />
        </div>
        <div className='flex-1 flex justify-center'>
          <Carta />
        </div>
        <div className='flex-1 flex justify-center'>
          <Carta />
        </div>
      </div>



    </div>
  )
}
