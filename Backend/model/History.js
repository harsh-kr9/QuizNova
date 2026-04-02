const mongoose = require('mongoose');

// History schema for storing search results
const HistorySchema = new mongoose.Schema({
        title: {
          type: String,
          required: true
        },
        body: {
          type: String,
          required: true
        },
        saved: {
            type: Boolean,
            default: false 
    }
});

const HistoryModel = mongoose.model('History', HistorySchema);

module.exports = HistoryModel;
