Design and develop a software which customers are able to register their vehicle by numberplate, 
assign alternate drivers and track their service history.
alternate drivers are not vehicle owners and should be able to request vehicle service on branch.
customers and alternate drivers should be able to book on certain dates displayed on the calendar, each day has 10 available slots to book and 10 technicians to assign on each vehicle. each branch has its own calendar, technicians and working day/hours.


you need to make sure each vehicle can only be booked for service once in a day and they can not book on the current day.
please note each technician is able to service one vehicle per day and SUVs require two technicians.
technicians should receive their daily plans each day at 7AM with vehicle and customer information including more information like booked slot.
you need to inform the customer on specific events , for example when technician starts servicing or when service is finished and vehicle is ready to drive.

requirements : 
    - create a public git repository and share the link with us
    - remember to commit early and push so we can track your progress
    - use mongoDb as your database
    - authentication should be done by jwt methods (using firebase as authentication is a plus)
    - develop using nestJs framework with typescript
    - write unit tests



Forcasting : 

# watch this : 
 - https://www.youtube.com/watch?v=f-Z_4ChUMLQ   |  Car Sale & Test Drive Module
 - https://www.youtube.com/watch?v=-n5KgivN2qI   |  Service Center Module

# users :
    - car owner 
    - technician
    - driver

> car owner : 
 - register his car 
 - assign driver 
 - assing technician
 - track his car
 - book a date ( 1 day before)
 - getting specific information , events , etc
 
> Drivers :
- request vehicle service

> technician :
- getting the daily plan at 7 am  ( information details )

 


