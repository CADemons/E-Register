'use strict';

const ID = '18oJYSx9QqQgOhEp2sANZp9K2zneBHsJ3a2-58v8CkbU';

var requests = [];

requests.push({
    updateSheetProperties: {
        properties: {sheetId: 0, title: 'Recent'},
        fields: 'title'
    }
});

var batchUpdateRequest = {requests: requests}
// send a batch update
