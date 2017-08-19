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
  - [**DEMO**](http://120.77.212.104/)
## 2. TODOS

  | Seq   | TODOS                                        |            |
  | ----- |:--------------------------------------------:| ----------:|
  |   0   | Home page                                    | Done       |
  |   1   | Topics page                                  | Done       |
  |   2   | Topics page nodes sorter                     | proceeding |
  |   3   | Topics page types sorter                     | Done       |
  |   4   | Topics pagination                            |            |
  |   5   | Jobs page                                    |            |
  |   6   | Wiki page                                    |            |
  |   7   | Cool sites page                              |            |
  |   8   | User login / logout                          |            |
  |   9   | City users page                              |            |
  |   10  | User page                                    |            |
  |   11  | Topic Component (show, create, edit, delete) | proceeding |
  |   12  | Device Detection , Responsive                |            |
  |   13  | Memory leak detection in browser             |            |
  |   14  | Css & js optimize                            |            |
  |   15  | Deployment                                   |            |

## 3. Bugs Fix

## 4. References
  - [**React.js 小书**](http://huziketang.com/books/react)
  - [**Redux book**](http://redux.js.org)
  - [**REACT TRAINING / REACT ROUTER**](https://reacttraining.com/react-router/web/api/BrowserRouter)



