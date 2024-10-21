import express from 'express'

const app = express()

const port = process.env.PORT || 3001

const schedule = {
  Monday: {
      class:["Spanish-Intro","Core-Lab", "Interactive-Interior"]
  }, 
  Tuesday: {
      class: ["Umami-Studies"]
  }, 
  Wednesday: {
      class: ["Spanish-Intro","Core-Lab"]
  }, 
  Thursday: {
      class: ["Core-Studio"]
  },
  Friday:{
		  class:[]
  }
}
app.get('/',(req,res) => {
  const matchingDays = [];
  const requestedClass = req.query.class;

  for (const day in schedule) {
    if (schedule[day].class.includes(requestedClass)) {
      matchingDays.push(day);
    }
  }
  res.send(matchingDays)
})
  
app.get('/schedule/:day', (req, res) => {
console.log(req.params.day)
for (const day in schedule){
  if(day == req.params.day){
	  console.log(`The class Ziye has on ${req.params.day} are ${schedule[day].class}`)
	  res.send(`The class Ziye has on ${req.params.day} are ${schedule[day].class}`)
	  }
	}
})

app.listen(port, () => {
  console.log(`this app listening on port ${port}` )
})