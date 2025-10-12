# Postman Testing Guide for Notes API

## Base URL

```
http://localhost:8081
```

## API Endpoints

### 1. GET - Welcome Message

**URL:** `http://localhost:8081/`  
**Method:** GET  
**Description:** Returns a welcome message

**Expected Response:**

```html
<h1>Welcome to Note taking application - Week06 Exercise</h1>
```

---

### 2. CREATE a New Note

**URL:** `http://localhost:8081/api/notes`  
**Method:** POST  
**Headers:**

- Content-Type: application/json

**Body (raw JSON):**

```json
{
  "content": {
    "noteTitle": "Sample Note Title",
    "noteDescription": "Sample Note Description",
    "priority": "HIGH",
    "dateAdded": "12/Oct/2025",
    "dateUpdated": "12/Oct/2025"
  }
}
```

**Expected Response (Status: 201):**

```json
{
  "noteTitle": "Sample Note Title",
  "noteDescription": "Sample Note Description",
  "priority": "HIGH",
  "dateAdded": "12/Oct/2025",
  "dateUpdated": "12/Oct/2025",
  "_id": "68eb21a0ac884968425cbe0f",
  "__v": 0
}
```

**Note:** Copy the `_id` from the response for use in subsequent tests.

---

### 3. GET All Notes

**URL:** `http://localhost:8081/api/notes`  
**Method:** GET

**Expected Response (Status: 200):**

```json
[
  {
    "_id": "68eb21c8ac884968425cbe16",
    "noteTitle": "Meeting Notes",
    "noteDescription": "Team meeting at 3 PM",
    "priority": "HIGH",
    "dateAdded": "12/Oct/2025",
    "dateUpdated": "12/Oct/2025",
    "__v": 0
  },
  {
    "_id": "68eb21ceac884968425cbe18",
    "noteTitle": "Shopping List",
    "noteDescription": "Buy groceries and supplies",
    "priority": "LOW",
    "dateAdded": "12/Oct/2025",
    "dateUpdated": "12/Oct/2025",
    "__v": 0
  }
]
```

---

### 4. GET a Single Note by ID

**URL:** `http://localhost:8081/api/notes/{noteId}`  
**Method:** GET  
**Example:** `http://localhost:8081/api/notes/68eb21c8ac884968425cbe16`

**Expected Response (Status: 200):**

```json
{
  "_id": "68eb21c8ac884968425cbe16",
  "noteTitle": "Meeting Notes",
  "noteDescription": "Team meeting at 3 PM",
  "priority": "HIGH",
  "dateAdded": "12/Oct/2025",
  "dateUpdated": "12/Oct/2025",
  "__v": 0
}
```

**Error Response (Status: 404):**

```json
{
  "message": "Note not found with id {noteId}"
}
```

---

### 5. UPDATE a Note by ID

**URL:** `http://localhost:8081/api/notes/{noteId}`  
**Method:** PUT  
**Headers:**

- Content-Type: application/json

**Example:** `http://localhost:8081/api/notes/68eb21c8ac884968425cbe16`

**Body (raw JSON):**

```json
{
  "content": {
    "noteTitle": "Updated Meeting Notes",
    "noteDescription": "Team meeting rescheduled to 4 PM",
    "priority": "MEDIUM",
    "dateAdded": "12/Oct/2025",
    "dateUpdated": "12/Oct/2025"
  }
}
```

**Expected Response (Status: 200):**

```json
{
  "_id": "68eb21c8ac884968425cbe16",
  "noteTitle": "Updated Meeting Notes",
  "noteDescription": "Team meeting rescheduled to 4 PM",
  "priority": "MEDIUM",
  "dateAdded": "12/Oct/2025",
  "dateUpdated": "12/Oct/2025",
  "__v": 0
}
```

---

### 6. DELETE a Note by ID

**URL:** `http://localhost:8081/api/notes/{noteId}`  
**Method:** DELETE  
**Example:** `http://localhost:8081/api/notes/68eb21c8ac884968425cbe16`

**Expected Response (Status: 200):**

```json
{
  "message": "Note deleted successfully!"
}
```

**Error Response (Status: 404):**

```json
{
  "message": "Note not found with id {noteId}"
}
```

---

## Testing Steps in Postman

1. **Start the Server:**

   ```bash
   node server.js
   ```

2. **Test Each Endpoint:**

   - Create a new collection in Postman called "Notes API"
   - Add each endpoint as a new request
   - Test in the following order:
     - GET welcome message
     - POST to create multiple notes
     - GET all notes
     - GET a single note (use ID from previous step)
     - PUT to update a note
     - DELETE to remove a note
     - GET all notes again to verify deletion

3. **Take Screenshots:**
   - Capture the request and response for each endpoint
   - Show the status codes (200, 201, 404, 500)
   - Show both successful and error responses

---

## Priority Values

The `priority` field accepts only these values:

- `HIGH`
- `MEDIUM`
- `LOW`

---

## Sample Notes Already Created

The following notes are already in the database for testing:

1. **Meeting Notes** (ID: 68eb21c8ac884968425cbe16)

   - Description: Team meeting at 3 PM
   - Priority: HIGH

2. **Shopping List** (ID: 68eb21ceac884968425cbe18)

   - Description: Buy groceries and supplies
   - Priority: LOW

3. **Code Review** (ID: 68eb21d4ac884968425cbe1a)
   - Description: Review pull requests before merge
   - Priority: MEDIUM

You can use these IDs to test GET, PUT, and DELETE operations.

---

## Tips

- Always use the correct `Content-Type: application/json` header for POST and PUT requests
- The request body structure uses a `content` wrapper object
- MongoDB Object IDs are unique for each document
- The server validates that the priority is one of the allowed values
- Error handling is included for invalid IDs and missing notes
