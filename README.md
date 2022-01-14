# Approach 

After I read through the reading, I explored the API documentation. 
As the project is not very large, I created a list of things that came to mind regarding project structure, how to implement the API and how to add pagination:
-	App container
-	Search box (optional- leave for last) 
-	List/Table - renders items
-	Pokemon item
-	Pokemon details (create a modal or route to new page?)
-	Pagination – using API to render 1 page at a time
-	Create separate file for types/interfaces
-	Create separate file to handle API

## Notes

-	Pagination/ Page limit in state:
I put the page limit in the state with an initial value of 16. In this way I could add a dropdown select box to change the value. (I didn’t implement it as I ran out of time) I also didn’t add the numbers of the pagination, but would add this if I’d have more time.

-	Minimal styling
I only used 1 css file to style all components, as the focus was not on styling. I only styled for functionality – so the information displayed is clear.

-	Time
I did not get to the optional searchbox part. I took a bit over 4 hours to complete the project.


