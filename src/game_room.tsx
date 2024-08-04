import { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useAppClient } from './hooks/useAppClient';

function App() {

  const [percentage, setPercentage] = useState(0);

  const {
    current_player,
    round,
    current_time
  } = useAppClient({
    player: "ivan",
    players: ["ivan", "diego", "angelica", "pablo"],
    max_time: 20
  });

  useEffect(() => {
    const percen = 100 * current_time / 20;
    setPercentage(percen);
  }, [current_time])

  return (
    <div className="h-screen w-screen relative bg-blue-500">
      <div className="grid grid-cols-12 grid-rows-6 gap-0 h-full w-full">
        <div className="bg-red-500 flex items-center justify-center">1</div>

        <div className="bg-green-500 flex items-center justify-center col-span-10">
          <div className="rounded-lg h-full w-full p-1 bg-white">
            <div className="rounded-lg h-full w-full p-2 bg-white shadow-inner-heavy">

            </div>
          </div>
        </div>

        <div className="bg-blue-500 flex items-center justify-center">3</div>

        <div className="bg-yellow-500 flex items-center justify-center row-span-4">
          <div className="rounded-lg h-full w-full p-1 bg-white">
            <div className="rounded-lg h-full w-full p-2 bg-white shadow-inner-heavy">

            </div>
          </div>
        </div>

        <div className="bg-purple-500 flex flex-col items-center justify-center row-span-4 col-span-10 p-5">
          <div className="rounded-md bg-white h-[60px] w-full max-w-[1000px] shadow-lg mb-2 flex items-center justify-between">
            <div className='w-24 h-24 z-10 bg-white rounded-full'>
              <CircularProgressbar value={percentage} text={`${current_time} Seg`} />
            </div>
            <span>Esperando el turno de {current_player}</span>
            <span>Ronda {round}</span>
          </div>
          <div className="rounded-full h-full w-full p-2 bg-white shadow-inner-heavy">

          </div>
        </div>

        <div className="bg-pink-500 flex items-center justify-center row-span-4">
          <div className="rounded-lg h-full w-full p-1 bg-white">
            <div className="rounded-lg h-full w-full p-2 bg-white shadow-inner-heavy">

            </div>
          </div>
        </div>


        <div className="bg-teal-500 flex items-center justify-center">7</div>

        <div className="bg-indigo-500 flex items-center justify-center col-span-10">
          <div className="rounded-lg h-full w-full p-1 bg-white">
            <div className="rounded-lg h-full w-full p-2 bg-white shadow-inner-heavy">
              
              
              <button className='rounded-md bg-yellow-500 w-28 h-12'>Pasar</button>
            </div>
          </div>
        </div>

        <div className="bg-gray-500 flex items-center justify-center">9</div>
      </div>
    </div>
  )
}

export default App
