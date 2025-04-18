const functions = require("firebase-functions");
const cors = require("./utils/cors");
require("./utils/firebase-init");
const {
  addMockGeneration,
  updateMockGeneration,
} = require("./services/firestore");

const admin = require("firebase-admin");
const db = admin.firestore();

exports.generateMockImage = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const { prompt } = req.body;

      if (!prompt) {
        return res.status(400).json({ error: "Missing prompt" });
      }

      const docRef = await addMockGeneration(prompt);

      const delay = Math.floor(Math.random() * 30000) + 30000;
      await new Promise((resolve) => setTimeout(resolve, delay));

      await updateMockGeneration(docRef.id, {
        status: "done",
        imageUrl: "https://picsum.photos/300/200",
      });

      return res.status(200).json({
        status: "done",
        id: docRef.id,
        imageUrl: "https://picsum.photos/300/200",
      });
    } catch (error) {
      console.error("Function error:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  });
});

exports.getStyleList = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const snapshot = await db.collection("styles").get();

      let styles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      styles = styles.sort((a, b) =>
        a.id === "none" ? -1 : b.id === "none" ? 1 : 0
      );

      return res.status(200).json(styles);
    } catch (error) {
      console.error("Failed to fetch styles:", error);
      return res.status(500).json({ error: "Failed to fetch styles" });
    }
  });
});
