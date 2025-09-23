## useEffect

In this guided practice, we will get comfortable with the syntax of the useEffect hook and write a few log statements to see the effect in action.
Note: With vite, npm run dev will start up our development server.

1. In your terminal, create a new React application with Vite.
   Show CodeType in npm create vite@latest

2. Follow the prompts to install the package. Choose React with Javascript.
3. Make sure you cd into the directory. npm install, and code . to open it in VSCode.
4. Navigate to your App.jsx and delete all the starter code, except for the button and count. This means you should leave the useState import, the count and setCount variables, and the button rendering the count.
5. Start the dev server and open your app in the browser.
   useEffect
   The idea from here is to clarify WHEN it is that the useEffect hook will fire.
6. Import the useEffect hook from react
7. Call the hook after the useState declaration, passing it an empty single callback function.
   Show Code
   import { useState, useEffect } from "react";
   import "./App.css";

export default function App() {
const [count, setCount] = useState(0);

useEffect(() => {});

return (
<>

      <button onClick={() => setCount((count) => count + 1)}>
                count is {count}

      </button>

    </>

);
} 8. Inside of the callback function, write a short console.log message that says "hello from useEffect":
Show Code
console.log("hello from useEffect")
We currently are passing in only one parameter - the callback function. According to the React documentation on useEffect
Links to an external site.
, how does the second parameter affect when the callback function runs?
Show Answer
The second argument is the dependency array. The Effect will run again after any re-renders if any of the dependencies in the dependency array have changed. 9. Have the browser console open, and click your count button. What do you notice?
Show AnswerEvery time you click the button, you should the hello message printed to the console. 10. Pass useEffect hook a second argument, an EMPTY array.
Show Code
useEffect(() => {
console.log("Hello from useEffect");
}, []);
Before you click the button again, take a second to predict what will be logged to the console. 11. Refresh your browser to clear the console, and notice what you get in the console.
Show AnswerYou should see the hello message from the useEffect only ONCE. (Possibly twice, because of strict mode
Links to an external site.
.) The empty dependency array makes sure that this effect is run only ONCE after the component mounts. 12. Now click on the count button. What do you notice?
Show AnswerYou only get a console.log message from the useEffect once. Even if the count changes, it does not trigger the useEffect to fire again. 13. For the last iteration of the useEffect hook, pass your count variable into your dependency array.
Show Code
useEffect(() => {
console.log("Hello from useEffect");
}, [count]); 14. Refresh the browser, and take note of what log messages you get. 15. Click on the count button again, and notice again what messages are showing up in the console.
Show Answer"Hello from useEffect" message.
Even though this is the same behavior you observed previously with no dependency array, this time, we are deliberately telling our useEffect to watch specifically for the count variable to change.
To take an even deeper dive, you can reference this link
Links to an external site.
to the React Documentation section on dependency arrays with useEffect.
Ensure you are comfortable with these three ways to work with the hook!
Congratulations! We are ready to move on and add much more functionality in our useEffect!
