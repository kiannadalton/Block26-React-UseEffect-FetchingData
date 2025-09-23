# Block 26: Fetching Data and UseEffect

Guided in-class project for Block 26: Fetching Data and UseEffect.

In this project we will learn about React props and state.

## Introduction

Now that we have learned about fetching data and rendering that data we are going to re-write our Block 25 demo to use data fetched from an API instead of hard-coded data.

We are going to be using a mock Todo List API. The base url for the todos is at `https://todo-api-ur6k.onrender.com/api/todos`

The object of a todo for this API is:

```json
{
  "id": 1,
  "task": "A good to do",
  "completed": false
}
```

Note the project is the same as the finished code in `block25_demo` but re-named to `block26_demo` for clarity

## Steps to complete the project

1. Create a components folder inside `/src` folder
2. Move the TaskList component from `App.jsx` to a `TaskList.jsx` file within the components folder
   - make sure to export the component
3. Import the TaskList component into `App.jsx`
4. Set the tasks default state to an empty array in `App.jsx`
5. At this point the screen will be blank and you'll see an error in the browser console.
   - add a check in our TaskList component to only map if tasks is defined
   - the error should go away and we should be able to see our title again
6. Create a `useEffect` within `App.jsx` to fetch a list of todos from `https://todo-api-ur6k.onrender.com/api/todos`
   - create a function called `getTasks` inside the useEffect
   - use `fetch` to get the todos from the API
   - use `.json()` on the response to get the reading `json` version
7. Update the state variable `tasks` with the list of todos we receive from the API
8. Call the function `getTasks` in the useEffect after our definition
9. Set a dependency array in our useEffect to only fetch the todos once
10. Add a message to the user in the `TaskList` component of `Loading...` when the tasks array is undefined
