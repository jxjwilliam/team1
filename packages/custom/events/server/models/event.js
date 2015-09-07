'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


/**
 * Event Schema
 */
var EventSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  type: {
    type: String,
    required: true,
    trim: true
  },
  sequenceId: {
    type: Number,
    required: true
  },
  transactionId: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  updated: {
    type: Array
  }
});

/**
 * Validations
 */
EventSchema.path('type').validate(function(type) {
  return !!type;
}, 'Type cannot be blank');

EventSchema.path('description').validate(function(description) {
  return !!description;
}, 'Description cannot be blank');

/**
 * Statics
 */
EventSchema.statics.load = function(id, cb) {
  this.findOne({
    _id: id
  }).populate('user', 'name username').exec(cb);
};

mongoose.model('Event', EventSchema);
