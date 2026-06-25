// const express = require("express");
// require("dotenv").config();
// const cors = require("cors");
// const app = express();
// app.use(cors());
// const port = 8000;

// const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
// const uri = process.env.MONGODB_URI;

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function server() {
//   try {
//     await client.connect();

//     const db = client.db("StudyNookDB");
//     const roomCollection = db.collection("Available Rooms");

//     // Get Available Rooms Route :
//     app.get("/rooms", async (req, res) => {
//       try {
//         const rooms = await roomCollection.find().toArray();
//         res.send(rooms);
//       } catch (error) {
//         console.error("Error fetching rooms:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//       }
//     });

//     // Rooms Details Route :
//     app.get("/rooms/:id", async (req, res) => {
//       const roomId = req.params.id;

//       try {
//         const room = await roomCollection.findOne({
//           _id: new ObjectId(roomId),
//         });
//         if (room) {
//           res.send(room);
//         } else {
//           res.status(404).json({ error: "Room not found" });
//         }
//       } catch (error) {
//         console.error("Error fetching room details:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//       }
//     });

//     app.post("/addRooms", async (req, res) => {
//       const newRoom = req.body;

//       console.log("Incoming Room Data from Frontend:", newRoom);

//       try {
//         const result = await roomCollection.insertOne(newRoom);
//         res.status(201).json(result);
//       } catch (error) {
//         console.error("Error adding new room:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//       }
//     });

//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!",
//     );
//   } finally {
//   }
// }
// server().catch(console.dir);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

//===================================

// const express = require("express");
// require("dotenv").config();
// const cors = require("cors");
// const app = express();

// app.use(cors());
// app.use(express.json());

// const port = 8000;

// const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
// const uri = process.env.MONGODB_URI;

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function server() {
//   try {
//     await client.connect();

//     const db = client.db("StudyNookDB");
//     const roomCollection = db.collection("Available Rooms");

//     // Get Available Rooms Route :
//     app.get("/rooms", async (req, res) => {
//       try {
//         const rooms = await roomCollection.find().toArray();
//         res.send(rooms);
//       } catch (error) {
//         console.error("Error fetching rooms:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//       }
//     });

//     // Rooms Details Route :
//     app.get("/rooms/:id", async (req, res) => {
//       const roomId = req.params.id;

//       try {
//         const room = await roomCollection.findOne({
//           _id: new ObjectId(roomId),
//         });
//         if (room) {
//           res.send(room);
//         } else {
//           res.status(404).json({ error: "Room not found" });
//         }
//       } catch (error) {
//         console.error("Error fetching room details:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//       }
//     });

//     // Add Rooms Route (POST Method)
//     app.post("/addRooms", async (req, res) => {
//       const newRoom = req.body;

//       console.log("Incoming Room Data from Frontend:", newRoom);

//       try {
//         const result = await roomCollection.insertOne(newRoom);
//         res.status(201).json(result);
//       } catch (error) {
//         console.error("Error adding new room:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//       }
//     });

//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!",
//     );
//   } finally {
//   }
// }
// server().catch(console.dir);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

//===================================
const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const port = 8000;

const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = process.env.MONGODB_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function server() {
  try {
    await client.connect();

    const db = client.db("StudyNookDB");
    const roomCollection = db.collection("Available Rooms");

    // Get Available Rooms Route :
    app.get("/rooms", async (req, res) => {
      try {
        const rooms = await roomCollection.find().toArray();
        res.send(rooms);
      } catch (error) {
        console.error("Error fetching rooms:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });

    // Rooms Details Route :
    app.get("/rooms/:id", async (req, res) => {
      const roomId = req.params.id;

      try {
        const room = await roomCollection.findOne({
          _id: new ObjectId(roomId),
        });
        if (room) {
          res.send(room);
        } else {
          res.status(404).json({ error: "Room not found" });
        }
      } catch (error) {
        console.error("Error fetching room details:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });

    // Add Rooms Route (POST Method)
    app.post("/addRooms", async (req, res) => {
      const newRoom = req.body;
      try {
        const result = await roomCollection.insertOne(newRoom);
        res.status(201).json(result);
      } catch (error) {
        console.error("Error adding new room:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });

    // Update Room (PUT Method) -> UPDATED
    app.put("/rooms/:id", async (req, res) => {
      const roomId = req.params.id;
      const updatedData = req.body;

      delete updatedData._id;

      try {
        const result = await roomCollection.updateOne(
          { _id: new ObjectId(roomId) },
          { $set: updatedData },
        );

        if (result.matchedCount === 0) {
          return res.status(404).json({ error: "Room not found" });
        }
        res.status(200).json({ message: "Room updated successfully", result });
      } catch (error) {
        console.error("Error updating room:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });

    // Delete Room Route (DELETE Method) -> UPDATED
    app.delete("/rooms/:id", async (req, res) => {
      const roomId = req.params.id;
      try {
        const result = await roomCollection.deleteOne({
          _id: new ObjectId(roomId),
        });
        if (result.deletedCount === 0) {
          return res.status(404).json({ error: "Room not found" });
        }
        res.status(200).json({ message: "Room deleted successfully", result });
      } catch (error) {
        console.error("Error deleting room:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });

    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!",
    );
  } finally {
  }
}
server().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
