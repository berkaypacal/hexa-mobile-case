const admin = require("firebase-admin");

if (!admin.apps.length) {
  admin.initializeApp();
}

const db = admin.firestore();
module.exports = db;

const seedStylesIfEmpty = require("./seedStyles");

(async () => {
  try {
    await seedStylesIfEmpty();
    console.log("Style seed check complete.");
  } catch (err) {
    console.error("Failed to seed styles:", err);
  }
})();
