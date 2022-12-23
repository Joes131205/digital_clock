const dateEl = document.getElementById("date")
const timeEl = document.getElementById("time")
const quoteEl = document.getElementById("quote")

const quotes = [  
"Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",  
"The most powerful programming technique is to write a piece of code that you have used before.",  
"The only way to do great work is to love what you do.",  
"The only way to learn a new programming language is by writing programs in it.",  
"The only way to do great work is to be passionate about what you do.",  
"The most important thing in life is to learn something new every day.",  
"The only way to achieve greatness is to be passionate about what you do.",  
"The only way to be truly successful is to be passionate about what you do.",  
"The only way to achieve true greatness is to be passionate about what you do.",  
"The only way to be truly successful in life is to be passionate about what you do.", 
"The best way to become a better programmer is to write more code.",  
"The most important skill a programmer can have is the ability to learn new things.",  
"The only way to achieve greatness is to never stop learning.",  
"The only way to be truly successful is to never stop growing and improving.",  
"The only way to achieve true greatness is to never stop striving for excellence.",  
"The only way to be truly successful in life is to never stop striving for excellence.",  
"The best way to learn is to teach.",  
"The best way to improve your programming skills is to surround yourself with other talented programmers.",  
"The most important thing in programming is to have a clear and logical mind.",  
"The best way to improve your programming skills is to work on projects that push your abilities.",
"You could be the good person, but you are a villain in somebody else's story.",
"Even tho you are the best upon somebody else, you aren't pleasing everybody in the planet.",
"In some story, good person can be a failure, while the villain can be a victorious.",
"Even if you are doing a good deed, somebody, somewhere doesn't like your action.",
"You can be taught by everybody, not matter their age, and skills.",
"Knowing when to quit is the best skill that everybody can take.",
"Even if you have a lot of something, if you do one dumb stuff, it'll went away fast",
"Remember your responsibility.",
"The truth will set you free, but first it will piss you off.",  
"The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for.",  
"The truth is rarely pure and never simple.",  
"The truth is, we all face struggles and hardships. It's how we overcome them that defines us.",  
"The truth is, not everyone will like you. That's okay. You don't need to be liked by everyone.",  
"The truth is, you are responsible for your own happiness. No one else can make you happy.",  
"The truth is, sometimes things don't go as planned. It's how we adapt and move forward that matters.",  
"The truth is, you can't please everyone. It's better to focus on what makes you happy.",  
"The truth is, we all make mistakes. It's how we learn and grow from them that matters.",  
"The truth is, life isn't always easy. It's how we handle the challenges that define us."]


//Summons quote to the page
getQuote = () => {
    quoteEl.textContent = quotes[Math.floor(Math.random() * quotes.length)]
}

//Set date and time every second
setInterval(getDate = () => {
    //Get full date and time
    const fullDate = new Date()
    console.log(fullDate)

    //Get day
    const monthList = ["January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"]
    const day = fullDate.getDate()
    const month = monthList[fullDate.getMonth()]
    const year = fullDate.getFullYear()

    //Get time
    const hours = fullDate.getHours().toString().padStart(2, '0')
    const minutes = fullDate.getMinutes().toString().padStart(2, '0')
    const seconds = fullDate.getSeconds().toString().padStart(2, '0')

    //Set time and date to the page
    dateEl.textContent = `${day} ${month}, ${year}`
    timeEl.textContent = `${hours}:${minutes}:${seconds}`
    console.log(day + ", " + month + ", " + year)
    console.log(hours + ":" + minutes + ":" + seconds)
    
}, 1000)