# MascotsNode

* A normal api with Node about mascots, it includes the modules express, fs, nodemon, mysql2, crypto and also eslint. 

** If you want to use this project you have to:

## First thing you have to do is create a database with 3 tables (mascots, owner, users)

- Mascots will have 6 columns = id, name, animal, age, owner, owner_id with owner_id being a foreign key of the id of the table owner and id being primary key
- Owner will have 4 coulmns = id, name, lastname, age with id being primary key
- Users will have 3 columns = id, email, password with the id being primary key, email being unique and password with email are varchars (100)

## AFTER DOING THE DATABASE YOU CAN DO THE NEXT STEPS

1. Clone it onto a folder on your Pc
2. Then you have to open your favorite terminal and go to the folder that you cloned and write `npm install` (that will install all the dependencies of my project)
3. And now what you want to do is `nodemon app` to execute my project
4. Have fun using it!
