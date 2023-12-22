const mongoose = require('mongoose');

const faceSchema = new mongoose.Schema({
  faceVector: { type: [Number], required: true },
});

const Face = mongoose.model('Face', faceSchema);

module.exports = Face;
