# Lab 8 - Starter
## Xi-Kai Wu A15881590
### Question 1
I would say opion 1.  The purpose of the automated tests is to help prevent code that isn't consistent with the program, doesn't ensure the quality of the software, or breaks the program from getting into the repo and messing with the program.  It definitely isn't option 3 because that would cause so many problems.  Testing at the end would mean any code that may be bad will get so deep into the code and it will be impossible to find the bug.  As for option 2, I believe that 
### Question 2
I would say no because end to end testing is mainly for front end testing.  The checking of the return of a function seems more of a unit testing scenario rather than end to end testing.
### Question 3
I would say you would use unit testing.  Yes, the message is sent once a button is clicked on the front end.  However, it is a backend script or function that will end up sending the message to the other user.  We can use unit testing to make sure that the message has both been sent by our side and also that it has been received by the other.  The front end can simply confirm the clicking of the button and that a function is called.  There probably is a way to check if this function call sent the message, but I believe it would be better to use unit testing to test the functions themselves.
### Question 4
I would say this could be done by end to end testing because of the clarification attached to the max message length.  If it is something to limit the user from typing more than 80 characters, the number of characters in a space can be checked via front end calls and there isn't really a need to check the backend, which is why I would believe there is no need for unit testing here and that end to end integration would be the better choice.
