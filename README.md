# React Home Page

This is a responsive React project that kicks butt. I made it using a lot of smaller classes, so all I have to do is call a function to get what I want. Check out this example snippet:
<Job 
  link="website.com" 
  types="JavaScript React" 
  title="Dev" 
  subtext={<span>awd hrw gws hjes sv</span>} 
  date="2004 - 2022" 
  />

This is an example of how I would create one of the boxes for the job.





# Cursor effect

I made the cursor effect by tracking the cursor using JavaScript and then placing a circle with a gradient around it to give it a cool look. I also had to change the z-index on the root CSS component so the circle could be in front of the entire website, giving it its effect where it changes the text color.

background: radial-gradient(circle, rgba(65, 105, 225, 0.12) 0%, rgba(65, 105, 225, 0.05) 40%, rgba(65, 105, 225, 0.01) 70%, rgba(65, 105, 225, 0.005) 100%);

(the fourth number is the opacity)




# Conclusion

This project is a great stepping stone in learning how to make clean and responsive UIs. Hopefully, someone will see my code and base their portfolio around it!
