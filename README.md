# Project Submission for Dispense 
### Considerations
  #### Backend
  First, thanks a lot for the opportunity.  I actually enjoyed it quite a bit as it has been sometime since I set up an express server.  Obviously it's nothing much but I think the general concept is there.  I kinda cut it short here because I went down a rabit hole on the frontend.  I'd definitely want to structure this a little better, (routes / middleware / controllers / etc...) as its already starting to get messy. 
 
  ##### Workspaces
  This was also my first time playing with Yarn workspaces.  I actually did the whole thing in pnpm workspaces because I wanted to learn those as well, but then I reread the assignment doc and it explicitly said yarn or npm.  I liked the --stream flag in the pnpm workspace... I'm not sure if I'm missing it, but yarn run dev from the root does actually run both dev servers, but I dont see any output so I dont usually use it and opt to run both separately anyway.  I do really like the shared dependencies and common package though.  As you can see I used Zod for validation and shared types.
  
  #### Frontend
  I really wanted a chance to use Vite.  It's pretty nice.  I'm also a tailwind guy so I apologize in advance if you arent.

## To install:

### clone repository

    git clone https://github.com/tylerkneidl/dispense.git

### install dependencies

    cd dispense
    yarn

### run both frontend and backend at the same time: 

    yarn run dev

open frontend at http://localhost:5173
backend server at http://localhost:8080


### run frontend alone:

    cd packages/frontend
    yarn run dev

### run backend alone:

    cd packages/backend
    yarn run dev

