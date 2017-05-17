var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment    = require("./models/comment");
 
 var data = [
     {
         name: "Cloud's Rest",
         image: "https://farm8.staticflickr.com/7179/6927088769_cc14a7c68e.jpg",
         description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
     },
     
       {
         name: "Montana Glacier",
         image: "https://farm3.staticflickr.com/2054/2229707213_302c00f6b5.jpg",
         description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
     },
     
       {
         name: "Mountain Rose",
         image: "https://farm1.staticflickr.com/661/32853307921_c804935e58.jpg",
         description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English."
     }
     
     
     ]
 
 
 function seedDB() {
  //Remove all campgrounds
 Campground.remove({}, function(err) {
   //   if(err) {
   //           console.log(err); 
   //           }
   //       console.log("removed campgrounds!");
         
   //         // add a few campgrounds
   // data.forEach(function(seed) {
   //     Campground.create(seed, function(err, campground) {
   //         if(err) {
   //             console.log(err)
   //         } else {
   //             console.log("added a campground");
               
   //             //create a comment
   //             Comment.create(
   //                 {
   //                     text: "This place is great, but I wish there was internet",
   //                     author: "Homer"
   //                 }, function(err, comment) {
   //                     if(err) {
   //                         console.log(err);
   //                     } else {
   //                         campground.comments.push(comment);
   //                         campground.save();
   //                         console.log("Created new comment");
   //                     }
                       
                       
   //                 });
   //         }
   //     });
   // });
   
   });
 
   //add a few comments
 
 }
 
 module.exports = seedDB;