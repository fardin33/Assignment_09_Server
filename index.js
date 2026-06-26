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
//       try {
//         const result = await roomCollection.insertOne(newRoom);
//         res.status(201).json(result);
//       } catch (error) {
//         console.error("Error adding new room:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//       }
//     });

//     // Update Room (PUT Method) -> UPDATED
//     app.put("/rooms/:id", async (req, res) => {
//       const roomId = req.params.id;
//       const updatedData = req.body;

//       delete updatedData._id;

//       try {
//         const result = await roomCollection.updateOne(
//           { _id: new ObjectId(roomId) },
//           { $set: updatedData },
//         );

//         if (result.matchedCount === 0) {
//           return res.status(404).json({ error: "Room not found" });
//         }
//         res.status(200).json({ message: "Room updated successfully", result });
//       } catch (error) {
//         console.error("Error updating room:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//       }
//     });

//     // Delete Room Route (DELETE Method) -> UPDATED
//     app.delete("/rooms/:id", async (req, res) => {
//       const roomId = req.params.id;
//       try {
//         const result = await roomCollection.deleteOne({
//           _id: new ObjectId(roomId),
//         });
//         if (result.deletedCount === 0) {
//           return res.status(404).json({ error: "Room not found" });
//         }
//         res.status(200).json({ message: "Room deleted successfully", result });
//       } catch (error) {
//         console.error("Error deleting room:", error);
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
//     // নতুন বুকিং কালেকশন ডিক্লেয়ার করা হলো
//     const bookingCollection = db.collection("bookings");

//     // Get Available Rooms Route
//     app.get("/rooms", async (req, res) => {
//       try {
//         const rooms = await roomCollection.find().toArray();
//         res.send(rooms);
//       } catch (error) {
//         console.error("Error fetching rooms:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//       }
//     });

//     // Rooms Details Route
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
//       try {
//         const result = await roomCollection.insertOne(newRoom);
//         res.status(201).json(result);
//       } catch (error) {
//         console.error("Error adding new room:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//       }
//     });

//     // Update Room (PUT Method)
//     app.put("/rooms/:id", async (req, res) => {
//       const roomId = req.params.id;
//       const updatedData = req.body;
//       delete updatedData._id;

//       try {
//         const result = await roomCollection.updateOne(
//           { _id: new ObjectId(roomId) },
//           { $set: updatedData },
//         );
//         if (result.matchedCount === 0) {
//           return res.status(404).json({ error: "Room not found" });
//         }
//         res.status(200).json({ message: "Room updated successfully", result });
//       } catch (error) {
//         console.error("Error updating room:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//       }
//     });

//     // Delete Room Route (DELETE Method)
//     app.delete("/rooms/:id", async (req, res) => {
//       const roomId = req.params.id;
//       try {
//         const result = await roomCollection.deleteOne({
//           _id: new ObjectId(roomId),
//         });
//         if (result.deletedCount === 0) {
//           return res.status(404).json({ error: "Room not found" });
//         }
//         res.status(200).json({ message: "Room deleted successfully", result });
//       } catch (error) {
//         console.error("Error deleting room:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//       }
//     });

//     // === নতুন বুকিং রাউট (POST Method) ===
//     app.post("/bookings", async (req, res) => {
//       const bookingData = req.body;
//       try {
//         const result = await bookingCollection.insertOne(bookingData);
//         res.status(201).json({ message: "Booking successful", result });
//       } catch (error) {
//         console.error("Error creating booking:", error);
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
//     const bookingCollection = db.collection("bookings");

//     // Get Available Rooms Route
//     app.get("/rooms", async (req, res) => {
//       try {
//         const rooms = await roomCollection.find().toArray();
//         res.send(rooms);
//       } catch (error) {
//         console.error("Error fetching rooms:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//       }
//     });

//     // Rooms Details Route
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
//       try {
//         const result = await roomCollection.insertOne(newRoom);
//         res.status(201).json(result);
//       } catch (error) {
//         console.error("Error adding new room:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//       }
//     });

//     // Update Room (PUT Method)
//     app.put("/rooms/:id", async (req, res) => {
//       const roomId = req.params.id;
//       const updatedData = req.body;
//       delete updatedData._id;

//       try {
//         const result = await roomCollection.updateOne(
//           { _id: new ObjectId(roomId) },
//           { $set: updatedData },
//         );
//         if (result.matchedCount === 0) {
//           return res.status(404).json({ error: "Room not found" });
//         }
//         res.status(200).json({ message: "Room updated successfully", result });
//       } catch (error) {
//         console.error("Error updating room:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//       }
//     });

//     // Delete Room Route (DELETE Method)
//     app.delete("/rooms/:id", async (req, res) => {
//       const roomId = req.params.id;
//       try {
//         const result = await roomCollection.deleteOne({
//           _id: new ObjectId(roomId),
//         });
//         if (result.deletedCount === 0) {
//           return res.status(404).json({ error: "Room not found" });
//         }
//         res.status(200).json({ message: "Room deleted successfully", result });
//       } catch (error) {
//         console.error("Error deleting room:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//       }
//     });

//     // === আপডেটেড বুকিং রাউট (ডাবল বুকিং প্রতিরোধ লজিকসহ) ===
//     app.post("/bookings", async (req, res) => {
//       const bookingData = req.body;
//       const { roomId, date, startTime, endTime } = bookingData;

//       try {
//         // ১. একই রুমে এবং একই তারিখে পূর্বে কোনো বুকিং আছে কিনা তা খুঁজে বের করা
//         const existingBookings = await bookingCollection
//           .find({ roomId, date })
//           .toArray();

//         // ২. নতুন টাইম স্লটের সাথে আগের কোনো বুকিং ওভারল্যাপ বা সংঘাত করছে কিনা তা চেক করা
//         const isOverlap = existingBookings.some((booking) => {
//           return (
//             (startTime >= booking.startTime && startTime < booking.endTime) || // নতুন স্টার্ট টাইম যদি আগের বুকিং স্লটের ভেতর পড়ে
//             (endTime > booking.startTime && endTime <= booking.endTime) || // নতুন এন্ড টাইম যদি আগের বুকিং স্লটের ভেতর পড়ে
//             (startTime <= booking.startTime && endTime >= booking.endTime) // নতুন স্লটটি যদি আগের পুরো স্লটকে কভার করে ফেলে
//           );
//         });

//         // স্লট ওভারল্যাপ হলে বুকিং আটকে দিয়ে এরর রেসপন্স পাঠানো হবে
//         if (isOverlap) {
//           return res.status(400).json({
//             error: "already_booked",
//             message:
//               "This room is already booked for the selected time slot. Please choose another slot or room.",
//           });
//         }

//         const result = await bookingCollection.insertOne(bookingData);
//         res.status(201).json({ message: "Booking successful", result });
//       } catch (error) {
//         console.error("Error creating booking:", error);
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
//     const bookingCollection = db.collection("bookings");

//     // ==========================================
//     // ROOMS ROUTES
//     // ==========================================

//     // Get Available Rooms Route
//     app.get("/rooms", async (req, res) => {
//       try {
//         const rooms = await roomCollection.find().toArray();
//         res.send(rooms);
//       } catch (error) {
//         console.error("Error fetching rooms:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//       }
//     });

//     // Rooms Details Route
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
//       try {
//         const result = await roomCollection.insertOne(newRoom);
//         res.status(201).json(result);
//       } catch (error) {
//         console.error("Error adding new room:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//       }
//     });

//     // Update Room (PUT Method)
//     app.put("/rooms/:id", async (req, res) => {
//       const roomId = req.params.id;
//       const updatedData = req.body;
//       delete updatedData._id;

//       try {
//         const result = await roomCollection.updateOne(
//           { _id: new ObjectId(roomId) },
//           { $set: updatedData },
//         );
//         if (result.matchedCount === 0) {
//           return res.status(404).json({ error: "Room not found" });
//         }
//         res.status(200).json({ message: "Room updated successfully", result });
//       } catch (error) {
//         console.error("Error updating room:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//       }
//     });

//     // Delete Room Route (DELETE Method)
//     app.delete("/rooms/:id", async (req, res) => {
//       const roomId = req.params.id;
//       try {
//         const result = await roomCollection.deleteOne({
//           _id: new ObjectId(roomId),
//         });
//         if (result.deletedCount === 0) {
//           return res.status(404).json({ error: "Room not found" });
//         }
//         res.status(200).json({ message: "Room deleted successfully", result });
//       } catch (error) {
//         console.error("Error deleting room:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//       }
//     });

//     // index.js (সম্পূর্ণ অংশ দেখানো হলো না, শুধুমাত্র বুকিং রাউটস পরিবর্তন করুন)

//     // ==========================================
//     // BOOKINGS ROUTES (UPDATED)
//     // ==========================================

//     // ১. নির্দিষ্ট ইউজারের বুকিং ডাটা নিয়ে আসা (Query parameter: ?userId=xxx)
//     app.get("/bookings", async (req, res) => {
//       try {
//         const { userId } = req.query;
//         let query = {};
//         if (userId) {
//           query = { userId: userId }; // শুধুমাত্র লগইন করা ইউজারের বুকিং ফিল্টার করবে
//         }
//         const bookings = await bookingCollection.find(query).toArray();
//         res.status(200).send(bookings);
//       } catch (error) {
//         console.error("Error fetching bookings:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//       }
//     });

//     // ২. বুকিং ক্যান্সেল করার রুট (PATCH Method রিকোয়ারমেন্ট অনুযায়ী)
//     app.patch("/bookings/:id/cancel", async (req, res) => {
//       const bookingId = req.params.id;
//       const { userId } = req.body; // রিকোয়ারমেন্ট অনুযায়ী ভেরিফাই করতে যে বুকিংটি এই ইউজারেরই

//       try {
//         // প্রথমে চেক করুন বুকিংটি এই ইউজারের কিনা
//         const booking = await bookingCollection.findOne({
//           _id: new ObjectId(bookingId),
//         });

//         if (!booking) {
//           return res.status(404).json({ error: "Booking not found" });
//         }

//         if (booking.userId !== userId) {
//           return res
//             .status(403)
//             .json({ error: "Unauthorized to cancel this booking" });
//         }

//         // স্ট্যাটাস আপডেট "cancelled" করা
//         const result = await bookingCollection.updateOne(
//           { _id: new ObjectId(bookingId) },
//           { $set: { status: "cancelled" } },
//         );

//         // নোট: যদি আপনার 'users' নামে আলাদা কালেকশন থাকে এবং সেখানে bookings array থাকে,
//         // তাহলে এখানে db.collection("users").updateOne({ _id: new ObjectId(userId) }, { $pull: { bookings: bookingId } }) ব্যবহার করবেন।

//         res.status(200).json({ message: "Booking cancelled successfully" });
//       } catch (error) {
//         console.error("Error cancelling booking:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//       }
//     });

//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!",
//     );
//   } finally {
//     // Keep connection open
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
//     const bookingCollection = db.collection("bookings");

//     // ==========================================
//     // ROOMS ROUTES
//     // ==========================================

//     // Get Available Rooms Route
//     app.get("/rooms", async (req, res) => {
//       try {
//         const rooms = await roomCollection.find().toArray();
//         res.send(rooms);
//       } catch (error) {
//         console.error("Error fetching rooms:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//       }
//     });

//     // Rooms Details Route
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
//       try {
//         const result = await roomCollection.insertOne(newRoom);
//         res.status(201).json(result);
//       } catch (error) {
//         console.error("Error adding new room:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//       }
//     });

//     // Update Room (PUT Method)
//     app.put("/rooms/:id", async (req, res) => {
//       const roomId = req.params.id;
//       const updatedData = req.body;
//       delete updatedData._id;

//       try {
//         const result = await roomCollection.updateOne(
//           { _id: new ObjectId(roomId) },
//           { $set: updatedData },
//         );
//         if (result.matchedCount === 0) {
//           return res.status(404).json({ error: "Room not found" });
//         }
//         res.status(200).json({ message: "Room updated successfully", result });
//       } catch (error) {
//         console.error("Error updating room:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//       }
//     });

//     // Delete Room Route (DELETE Method)
//     app.delete("/rooms/:id", async (req, res) => {
//       const roomId = req.params.id;
//       try {
//         const result = await roomCollection.deleteOne({
//           _id: new ObjectId(roomId),
//         });
//         if (result.deletedCount === 0) {
//           return res.status(404).json({ error: "Room not found" });
//         }
//         res.status(200).json({ message: "Room deleted successfully", result });
//       } catch (error) {
//         console.error("Error deleting room:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//       }
//     });

//     // ==========================================
//     // BOOKINGS ROUTES
//     // ==========================================

//     // ১. নতুন বুকিং তৈরি করার রাউট (POST Method)
//     app.post("/bookings", async (req, res) => {
//       const newBooking = req.body;
//       try {
//         // নতুন বুকিং ইনসার্ট করার সময় ডিফল্ট স্ট্যাটাস "confirmed" সেট করা হলো
//         newBooking.status = "confirmed";

//         const result = await bookingCollection.insertOne(newBooking);
//         res.status(201).json({ acknowledged: true, result: result });
//       } catch (error) {
//         console.error("Error creating booking:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//       }
//     });

//     // ২. নির্দিষ্ট ইউজারের বুকিং ডাটা ফিল্টার করে নিয়ে আসা (GET Method)
//     app.get("/bookings", async (req, res) => {
//       try {
//         const { userId } = req.query;
//         let query = {};
//         if (userId) {
//           query = { userId: userId };
//         }
//         const bookings = await bookingCollection.find(query).toArray();
//         res.status(200).send(bookings);
//       } catch (error) {
//         console.error("Error fetching bookings:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//       }
//     });

//     // ৩. বুকিং ক্যান্সেল করার রুট (PATCH Method)
//     app.patch("/bookings/:id/cancel", async (req, res) => {
//       const bookingId = req.params.id;
//       const { userId } = req.body;

//       try {
//         const booking = await bookingCollection.findOne({
//           _id: new ObjectId(bookingId),
//         });

//         if (!booking) {
//           return res.status(404).json({ error: "Booking not found" });
//         }

//         if (booking.userId !== userId) {
//           return res
//             .status(403)
//             .json({ error: "Unauthorized to cancel this booking" });
//         }

//         const result = await bookingCollection.updateOne(
//           { _id: new ObjectId(bookingId) },
//           { $set: { status: "cancelled" } },
//         );

//         res
//           .status(200)
//           .json({ message: "Booking cancelled successfully", result });
//       } catch (error) {
//         console.error("Error cancelling booking:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//       }
//     });

//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!",
//     );
//   } finally {
//     // Connection open থাকবে
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
// index.js
const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 8000; // Render/Vercel-এ ডেপ্লয় করার জন্য প্রসেস পোর্ট রাখা বেস্ট প্র্যাকটিস

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
    // প্রোডাকশনে সরাসরি connect করা অনেক সময় ড্রপ করতে পারে, তাই জাস্ট চেক রাখা হলো
    await client.connect();

    const db = client.db("StudyNookDB");
    const roomCollection = db.collection("Available Rooms");
    const bookingCollection = db.collection("bookings");

    // ==========================================
    // ROOMS ROUTES
    // ==========================================

    // Get Available Rooms Route
    app.get("/rooms", async (req, res) => {
      try {
        const rooms = await roomCollection.find().toArray();
        res.send(rooms);
      } catch (error) {
        console.error("Error fetching rooms:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });

    // Rooms Details Route
    app.get("/rooms/:id", async (req, res) => {
      const roomId = req.params.id;
      try {
        // ওআর কন্ডিশন দেওয়া হলো যাতে ভুল বা ইনভ্যালিড আইডি দিলে ক্র্যাশ না করে
        if (!ObjectId.isValid(roomId)) {
          return res.status(400).json({ error: "Invalid Room ID format" });
        }
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

    // Update Room (PUT Method)
    app.put("/rooms/:id", async (req, res) => {
      const roomId = req.params.id;
      const updatedData = req.body;
      delete updatedData._id;

      try {
        if (!ObjectId.isValid(roomId)) {
          return res.status(400).json({ error: "Invalid Room ID format" });
        }
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

    // Delete Room Route (DELETE Method)
    app.delete("/rooms/:id", async (req, res) => {
      const roomId = req.params.id;
      try {
        if (!ObjectId.isValid(roomId)) {
          return res.status(400).json({ error: "Invalid Room ID format" });
        }
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

    // ==========================================
    // BOOKINGS ROUTES
    // ==========================================

    // ১. নতুন বুকিং তৈরি করার রাউট
    app.post("/bookings", async (req, res) => {
      const newBooking = req.body;
      try {
        // যদি ডাটাতে স্ট্যাটাস না থাকে, তবেই ডিফল্ট "confirmed" বসবে
        if (!newBooking.status) {
          newBooking.status = "confirmed";
        }

        const result = await bookingCollection.insertOne(newBooking);
        res.status(201).json({ acknowledged: true, result: result });
      } catch (error) {
        console.error("Error creating booking:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });

    // ২. নির্দিষ্ট ইউজারের বুকিং ডাটা ফিল্টার করে নিয়ে আসা (ওল্ড ডাটা ফিক্স সহ)
    app.get("/bookings", async (req, res) => {
      try {
        const { userId } = req.query;
        let query = {};

        if (userId) {
          // ওল্ড ডাটাতে ইউজার আইডি অন্য কোনো নামে (যেমন user_id বা user) থাকতে পারে,
          // তাই $or অপারেটর দিয়ে ডিফেন্সিভ কুয়েরি করা হলো যেন ওল্ড ডাটাও খুঁজে পায়।
          query = {
            $or: [{ userId: userId }, { user_id: userId }, { user: userId }],
          };
        }

        const bookings = await bookingCollection.find(query).toArray();
        res.status(200).send(bookings);
      } catch (error) {
        console.error("Error fetching bookings:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });

    // ৩. বুকিং ক্যান্সেল করার রুট
    app.patch("/bookings/:id/cancel", async (req, res) => {
      const bookingId = req.params.id;
      const { userId } = req.body;

      try {
        if (!ObjectId.isValid(bookingId)) {
          return res.status(400).json({ error: "Invalid Booking ID format" });
        }

        const booking = await bookingCollection.findOne({
          _id: new ObjectId(bookingId),
        });

        if (!booking) {
          return res.status(404).json({ error: "Booking not found" });
        }

        // ওল্ড ডাটা এবং নিউ ডাটা দুইটার আইডি ফরম্যাট চেক করার জন্য কন্ডিশন আপগ্রেড করা হলো
        const dbUserId = booking.userId || booking.user_id || booking.user;
        if (dbUserId !== userId) {
          return res
            .status(403)
            .json({ error: "Unauthorized to cancel this booking" });
        }

        const result = await bookingCollection.updateOne(
          { _id: new ObjectId(bookingId) },
          { $set: { status: "cancelled" } },
        );

        res
          .status(200)
          .json({ message: "Booking cancelled successfully", result });
      } catch (error) {
        console.error("Error cancelling booking:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
    });

    console.log("Connected successfully to MongoDB!");
  } catch (err) {
    console.error("Database connection error:", err);
  }
}
server().catch(console.dir);

app.get("/", (req, res) => {
  res.send("StudyNook Server is running fine!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
