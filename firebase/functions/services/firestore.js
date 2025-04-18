require("../utils/firebase-init");
const admin = require("firebase-admin");

const db = admin.firestore();

async function addMockGeneration(prompt) {
  return await db.collection("mockGenerations").add({
    prompt,
    status: "processing",
  });
}

async function updateMockGeneration(id, data) {
  return await db.collection("mockGenerations").doc(id).update(data);
}

module.exports = {
  addMockGeneration,
  updateMockGeneration,
};
