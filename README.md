## 0. Installation
  - You first need to install the package manager, such as **npm** or **yarn**.
  - In this demo, I use [**yarn**](https://yarnpkg.com/en/docs/install) rather than npm.
  - Run the script below to install dependences:

     ````
     yarn init
     ````

     ````
     yarn install
     ````

     ````
     yarn global add webpack-dev-server
     ````
  
  - Install dependences sperately:
  
     ```
     yarn init
     ```

     ````
     yarn add babel-core \
              babel-preset-es2015 \
              babel-preset-react \
              babel-preset-stage-0 --no-progress -D
     ````

     ````
     yarn add webpack \
              css-loader \
              sass-loader \
              node-sass \
              style-loader \
              file-loader \
              postcss-loader \
              url-loader -D --no-progress
     ````

     ````
     yarn add webpack-dashboard \
              html-webpack-plugin \
              extract-text-webpack-plugin \
              webpack-dev-server  -D --no-progress
     ````

     ````
     yarn add react \
              react-redux \
              redux \
              react-router-dom \
              redux-logger \
              redux-thunk \
              prop-types --no-progress
     ````

 
      
## 1. App startup
  - Local(development):

    ````
    webpack-dev-server
    ````
  - Server(production):

    ````
    
    ````
## 2. TODOS
  0. Topics page nodes sorter
  1. Topics pagination
  2. Jobs page
  3. Wiki page
  4. Cool sites page
  5. User login / logout
  6. City users page
  7. User page
  8. Topic Component (show, create, edit, delete)

## 3. Bugs Fix

## 4. References
  - [**React.js 小书**](http://huziketang.com/books/react)
  - [**Redux book**](http://redux.js.org)
  - [**REACT TRAINING / REACT ROUTER**](https://reacttraining.com/react-router/web/api/BrowserRouter)



