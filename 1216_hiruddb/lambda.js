let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    // ddb.get({
    //     TableName: "hirutes",
    //     Key: {
    //         id: "1"
    //     }
    // }).promise()
    //     .then(data => {
    //         // your code goes here
    //     })
    //     .catch(err => {
    //         // error handling goes here
    //     });

    // ddb.scan({
    //     TableName: "hirutes",
    //     ExpressionAttributeValues: {}
    // }).promise()
    //     .then(data => {
    //         // your code goes here
    //     })
    //     .catch(err => {
    //         // error handling goes here
    //     });


    ddb.scan({
        TableName: "testIndu",
        ExpressionAttributeValues: {}
    }).promise()
        .then(data => {
            // your code goes here
             //return { "message": data };
        })
        .catch(err => {
            // error handling goes here
            console.log(err);
             return { "message": data };
        });



   
};