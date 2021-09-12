import './App.css';
import Links from './Links.js'
const linkList= [
  {
    name:"New Admits Whatsapp Group",
    link:"https://chat.whatsapp.com/HrBmPnOOirbJiMJ3sB46Ij"
  },
  {
    name:"FAQ from Winter 2019 Batch",
    link:"https://docs.google.com/document/d/1-MfTV2yFdHwmJFcq0DuIobs5jrnAjworYp_oTwKt9Is/edit?usp=drivesdk"
  },
  {
    name:"Exam Databse",
    link:"https://db.fachschaft.tf.uni-freiburg.de/exams/quick-search"},
  {
    name:"Fachschaft - Student Union",
    link:"https://fachschaft.tf.uni-freiburg.de/"
  },
  {
    name:"Marticulation",
    link:"https://www.studium.uni-freiburg.de/en/student-services/matriculation/matriculation"
  },
  
  {
    name:"Free your stuff - Freiburg",
    link:"https://www.free-your-stuff.com/de/freiburg-im-breisgau"
  },
  {
    name:"Ebay - Free your stuff",
    link:"https://www.ebay-kleinanzeigen.de/stadt/freiburg/"
  },

  {
    name:"Facebook- Free your stuff ",
    link:"https://www.facebook.com/groups/178735922261656/"
  },
  {
     name:"Buy Laptops- Student Offers",
    link:"https://www.campuspoint.de/"
  },
  {
    name:"Cyber-Physical Systems I - Discrete Models",
    link:'https://swt.informatik.uni-freiburg.de/teaching/WS2020-21/cps-dm'
  },
  {
    name:"How to fill German VISA Application",
    link:"https://msingermany.co.in/how-to-fill-german-student-visa-application-form"
  },
  {
    name:"Warning on Illegal downloads germany",
    link:"https://www.indianstudentsgermany.org/warning-illegal-downloads-germany"},
  {
    name:"Study Vocuhers FAQ",
    link:"https://www.studium.uni-freiburg.de/en/student-services/study-fees/#Voucher"
  },

  {
    name:"Airport Bus",
    link:"https://www.freiburger-reisedienst.de/index.php?lang=en"
  }

]

function App() {
  return (
    <div className="App" >
        {linkList.map((obj)=>
          <Links {...obj} key={obj.name}/>
        )}
    </div>
  );
}

export default App;
