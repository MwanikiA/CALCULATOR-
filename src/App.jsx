import { useState } from "react"
const App = ()=>{

  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(0)
  const [operator, setOperator] = useState('')
  


  const handleNumber = (e)=>{
    
    if(num===0){
      setNum(e.target.innerText)
    }else{
    setNum(num + e.target.innerText)
    }

  }
  const handleOperator =(e)=>{
    setNum2(num)
    setOperator(e.target.innerText)
    setNum(0)

  }
  const handleResult = (e)=>{
    switch(operator) {
     case 'x':
      setNum(parseFloat(num2)* parseFloat(num))
      break
      case '+':
      setNum(parseFloat(num2) + parseFloat(num))
      break
      case '-':
      setNum(parseFloat(num2) - parseFloat(num))
      break
      case '/':
      setNum(parseFloat(num2) / parseFloat(num))
      break
      case '%':
      setNum(parseFloat(num2) * (parseFloat(num)/100))
      break

    }
    

  }
  
  const handleClearance = (e)=>{
    setNum(0)
  }
  



  return(
    <div className="w-screen h-screen bg-cyan-700 flex items-center justify-center">
      <div className="w-1/4 h-4/4 bg-black">
        <div className="w-100 h-20 flex justify-end pr-20 text-3xl text-white items-center ">{num}</div>
        <div className="flex w-100 flex-wrap justify-center items-center gap-5 pb-6" >
          <button onClick={handleClearance} className="w-14 h-14 rounded-full bg-cyan-900 text-xl">AC</button>
          <button onClick={handleOperator} className="w-14 h-14 rounded-full bg-cyan-900 text-xl">+/-</button>
          <button onClick={handleResult} className="w-14 h-14 rounded-full bg-cyan-900 text-xl">%</button>
          <button onClick={handleOperator} className="w-14 h-14 rounded-full bg-cyan-400 text-xl">/</button>
          <button onClick={handleNumber} className="w-14 h-14 rounded-full bg-cyan-200 text-xl">7</button>
          <button onClick={handleNumber}  className="w-14 h-14 rounded-full bg-cyan-200 text-xl">8</button>
          <button onClick={handleNumber} className="w-14 h-14 rounded-full bg-cyan-200 text-xl">9</button>
          <button onClick={handleOperator} className="w-14 h-14 rounded-full bg-cyan-400 text-xl">x</button>
          <button onClick={handleNumber} className="w-14 h-14 rounded-full bg-cyan-200 text-xl">4</button>
          <button onClick={handleNumber} className="w-14 h-14 rounded-full bg-cyan-200 text-xl">5</button>
          <button onClick={handleNumber} className="w-14 h-14 rounded-full bg-cyan-200 text-xl">6</button>
          <button onClick={handleOperator} className="w-14 h-14 rounded-full bg-cyan-400 text-xl">-</button>
          <button onClick={handleNumber} className="w-14 h-14 rounded-full bg-cyan-200 text-xl">1</button>
          <button onClick={handleNumber} className="w-14 h-14 rounded-full bg-cyan-200 text-xl">2</button>
          <button onClick={handleNumber} className="w-14 h-14 rounded-full bg-cyan-200 text-xl">3</button>
          <button onClick={handleOperator} className="w-14 h-14 rounded-full bg-cyan-400 text-xl">+</button>
          <button onClick={handleNumber} className="w-14 h-14 rounded-full bg-cyan-200 text-xl">0</button>
          <button className="w-14 h-14 rounded-full bg-cyan-200 text-xl"></button>
          <button onClick={handleOperator} className="w-14 h-14 rounded-full bg-cyan-200 text-xl">.</button>
          <button onClick={handleResult} className="w-14 h-14 rounded-full bg-cyan-400 text-xl">=</button>
        </div>
      </div>

    </div>
  )




}

export default App;
