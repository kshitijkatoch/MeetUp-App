# MeetUp – Event Management Platform

A full-stack Meetup application that allows users to explore, view, and manage meetup events.
The app provides event listings, detailed event views, and category-based filtering with a modern, responsive UI.
Built with a React frontend, Node/Express backend, and MongoDB database, following RESTful API principles.

---

## Demo Link

[Live Demo](https://meet-up-app-alpha.vercel.app/)  

---

## Quick Start
### Frontend
```
git clone https://github.com/kshitijkatoch/MeetUp-App.git
cd MeetUp-App
npm install
npm run dev      # or `npm start` / `yarn dev`
```
### Backend  
```
git clone https://github.com/kshitijkatoch/Meetup_App_Backend.git
cd Meetup_App_Backend
npm install
npm run dev      # or `npm start` / `yarn dev`
```

## GitHub Repositories
- **Frontend**: https://github.com/kshitijkatoch/MeetUp-App
- **Backend**: https://github.com/kshitijkatoch/Meetup_App_Backend

## Technologies
- React JS
- React Router
- Context API
- Node.js
- Express.js
- MongoDB
- REST APIs
- JWT

## Features
**Event Listing**
- View all available meetup events
- Clean and structured event cards
- Display event title, date, and location

**Event Details**
- View detailed information for a single event
- Event description, speakers, and schedule

**Filtering**
- Filter events by category or type
- Easy navigation across different meetups

**State Management**
- Global state management using Context API
- Centralized event data handling

**Responsive Design**
- Fully responsive UI
- Optimized for mobile and desktop devices

## API Reference

### **GET	/events**<br>	 
Fetch all events<br>	 
Sample Response:<br>
```[{ "_id": "...", "title": "Tech Meetup", "date": "2025-01-20", "location": "Delhi" }]```

### **POST /events**<br> 	
Create a new event<br>	
Sample Response:<br>
```{"message":"Event added successfully","event":{"_id":"...","title":"Tech Meetup"}}```

### **GET /events/:id**<br>	 	
Fetch event by ID<br>		
Sample Response:<br>
```{ "_id": "...", "title": "Tech Meetup", "location": "Delhi" }```

### **DELETE /events/:id**<br>  	
Delete event by ID<br> 	 
Sample Response:<br> 
```{"message":"Event deleted successfully","deleted":{"_id":"..."}}```


## Contact
For bugs or feature requests, please reach out to kshitijkatoch213@gmail.com
