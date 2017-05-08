var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var RoomSchema = new Schema({
  // room_id: { type: Number, ref: 'Room' },
 },{
  timestamps: true
});

module.exports = mongoose.model('Room', RoomSchema);
