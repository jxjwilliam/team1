exports.models = {

  Event: {
    id: 'Event',
    required: ['description', 'type'],
    properties: {
   
      type: {
        type: 'string',
        description: 'Title of the Event'
      },
      description: {
        type: 'string',
        description: 'content of the Event'
      },
      sequenceId: {
        type: 'Number',
        description: 'Sequence Id'
      },
      transactionId: {
        type: 'Number',
        description: 'Transaction Id'
      }
    }
  }
};
