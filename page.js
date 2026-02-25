

export default function Home() {
  return (
    <div className="flex w-full h-screen items-center justify-center font-sans">
      <div className="w-[10%] h-screen black flex justify-center items-center p-6">
      <div className="w-full h-full bg-color rounded-4xl flex items-center justify-center">
        
      </div>
      </div>
      <div className="w-[60%] h-screen p-6 gap-6 flex flex-col black">
      <div className="w-full h-[7%] flex items-center justify-start px-4 bg-color rounded-2xl">
        <p className="text-white opacity-60">Search for cities</p>
      </div>
      <div className="w-full h-[40%] flex items-center justify-center rounded-2xl">
        <div className="w-1/2 h-full flex flex-col items-center justify-start">
        <div className="w-full h-1/2 flex flex-col items-start justify-center gap-2 p-8">
          <h1 className="text-7xl font-bold text-white">Madrid</h1>
          <p className="text-lg text-white opacity-60">chance of rain 0%</p>
        </div>
        <div className="w-full h-1/2 flex items-center justify-start p-8">
          <h1 className="text-7xl font-bold text-white">31°C</h1>
        </div>
        </div>
        <div className="w-1/2 h-full flex items-center justify-center">
        <img src="sun.png" alt="weather icon" className="w-2/3 h-2/3 object-contain"/>
        </div>
      </div>
      <div className="w-full h-[30%] flex flex-col items-start justify-start bg-color rounded-2xl p-4">
        <p className="text-white opacity-60 mb-4 text-lg">Today's Forecast</p>
        <div className="flex w-full overflow-x-auto justify-between px-12">
          <div className="flex flex-col items-center gap-4 min-w-fit">
            <p className="text-white text-lg opacity-60">9 AM</p>
            <img src="sun.png" alt="weather" className="w-12 h-12"/>
            <p className="text-white text-lg">28°C</p>
          </div>
          <div className="w-[2px] h-[90%] black opacity-30"></div>
          <div className="flex flex-col items-center gap-4 min-w-fit">
            <p className="text-white text-lg opacity-60">10 AM</p>
            <img src="sun.png" alt="weather" className="w-12 h-12"/>
            <p className="text-white text-lg">29°C</p>
          </div>
          <div className="w-[2px] h-[90%] black opacity-30"></div>
          <div className="flex flex-col items-center gap-4 min-w-fit">
            <p className="text-white text-lg opacity-60">11 AM</p>
            <img src="sun.png" alt="weather" className="w-12 h-12"/>
            <p className="text-white text-lg">30°C</p>
          </div>
          <div className="w-[2px] h-[90%] black opacity-30"></div>
          <div className="flex flex-col items-center gap-4 min-w-fit">
            <p className="text-white text-lg opacity-60">12 PM</p>
            <img src="sun.png" alt="weather" className="w-12 h-12"/>
            <p className="text-white text-lg">31°C</p>
          </div>
          <div className="w-[2px] h-[90%] black opacity-30"></div>
          <div className="flex flex-col items-center gap-4 min-w-fit">
            <p className="text-white text-lg opacity-60">1 PM</p>
            <img src="sun.png" alt="weather" className="w-12 h-12"/>
            <p className="text-white text-lg">30°C</p>
          </div>
          <div className="w-[2px] h-[90%] black opacity-30"></div>
          <div className="flex flex-col items-center gap-4 min-w-fit">
            <p className="text-white text-lg opacity-60">2 PM</p>
            <img src="sun.png" alt="weather" className="w-12 h-12"/>
            <p className="text-white text-lg">30°C</p>
          </div>
        </div>
      </div>
      <div className="w-full h-[30%] flex items-center justify-center bg-color rounded-2xl">
      </div>
      </div>
      <div className="w-[30%] h-screen black p-6 flex justify-center items-end">
      <div className="w-full h-[90%] flex items-center justify-center bg-color rounded-2xl">
      </div>
      </div>
    </div>
    );
}
