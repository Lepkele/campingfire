RESTFUL ROUTES

name       url       verb       desc.
===============================================
INDEX     /dogs      GET        Display a list of all dog
NEW       /dogs/new  GET        Displays form to make a new dog
CREATE    /dogs      POST       Add new dog to DB
SHOW      /dogs/:id  GET        Shows info about one dog


INDEX       /campgrounds
NEW         /campgrounds/new
CREATE      /campgrounds
SHOW        /campgrounds/:id


NEW         campgrounds/:id/comments/new   GET
CREATE      campgrounds/:id/comments       POST


# Style show page
* Add sidebar to show page
* Display comments nicely

# Finish Styling Show Page
* Add public directory
* Add custom stylesheet

## Add User Model
* Install all packages needed for auth
* Define User model