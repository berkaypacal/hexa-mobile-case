const admin = require("firebase-admin");
const db = admin.firestore();

const defaultStyles = [
  { id: "none", label: "No Style" },
  { id: "monogram", label: "Monogram" },
  { id: "abstract", label: "Abstract" },
  { id: "mascot", label: "Mascot" },
];

module.exports = async function seedStylesIfEmpty() {
  const snapshot = await db.collection("styles").get();

  if (snapshot.empty) {
    console.log("📦 Seeding styles...");

    const batch = db.batch();

    defaultStyles.forEach((style) => {
      const docRef = db.collection("styles").doc(style.id);
      batch.set(docRef, style);
    });

    await batch.commit();
    console.log("Styles collection seeded.");
  } else {
    console.log("Styles already exist. Skipping seed.");
  }
};
