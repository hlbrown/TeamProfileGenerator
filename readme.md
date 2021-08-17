This project creates a team member roster based off the users input.

Link to youtube video for walkthrough <https://youtu.be/ATZtMeprJf8>

## create a team profile generator with 4 classes
-Employee (main class)
-Intern (extension of Employee)
-Manager (extension of Employee)
-Engineer (extension of Employee)

## File structure
--md--
    -dist/
        -generated html page
    -lib/
        -Employee.js
        -Engineer.js
        -Intern.js
        -Manager.js
    -src/
        -css.js
    -test/
        -employee.test.js
        -intern.test.js
        -engineer.test.js
        -manager.test.js
    -index.js
    -package-lock.json
    -package.json
    -readme.md

## Steps to get started

    1. create a folder to contain all of the directories
    2. create an index.js file
    3. run npm install
    4. add dependencies (inquirer, jest)

## Create classes
    Employee class with name, id and email as params
    create the this.role to be overwritten by other classes
    return the params and role

    Engineer class extended off of employee class 
        added github as a constructor for Engineer
        overwrite the role to Engineer
        return
    
    Intern class extended off of employee class
        added school as a constructor
        overwrite the role as intern
        return
    
    Manager Class extends employee class
        added office number to constructor
        overwrite role as manager
        return

## tests

    - employee tests
        describe employee class
        set the constructor arguments for name, id and email
        describes getting the information from the user to use as arguments

    - engineer tests
        set the value for the github user argument
        make sure the role is able to be overwritten
        test getting the valie of the github user

    - intern tests
        set the school value as a constructor
        test the role is overwritten correctly
        testing to make sure the get value is working properly from user input
    
    - manager tests
        test setting the office number as a argument
        test overwriting the value of role
        test getting office number from the input received

    ** if the test do not pass you should review the code and see where it broke
    
## run test command ( npm test) 
## all tests should come back as passed

## start command to build roster ( npm start or node index.js)

    The generated HTML page should generate in the ./dist folder
    ** right click over the html file and open in default browser **


