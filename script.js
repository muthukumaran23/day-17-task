
var res=document.getElementById("main")
var result=()=>{
  setTimeout(()=>{
      console.log(10)
      res.innerText= 10
  },1000)

  setTimeout(()=>{
      console.log(9)
      res.innerText= 9
  },2000)

  setTimeout(()=>{
      console.log(8)
      res.innerText= 8
  },3000)

  setTimeout(()=>{
      console.log(7)
      res.innerText= 7
  },4000)

  setTimeout(()=>{
      console.log(6)
      res.innerText= 6
  },5000)

  setTimeout(()=>{
      console.log(5)
      res.innerText= 5
  },6000)

  setTimeout(()=>{
      console.log(4)
      res.innerText= 4
  },7000)

  setTimeout(()=>{
      console.log(3)
      res.innerText= 3
  },8000)

  setTimeout(()=>{
      console.log(2)
      res.innerText= 2
  },9000)

  setTimeout(()=>{
      console.log(1)
      res.innerText= 1
  },10000)

  setTimeout(()=>{
      console.log("HAPPY INDEPENDENCE DAY")
      
      
      res.innerHTML= `<h2>HAPPY INDEPENDENCE DAY</h2> `
 },11000)
 }
  console.log(result())

