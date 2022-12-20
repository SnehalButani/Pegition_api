//and
db.users.find({
    "$and": [{
        "name": { "$in": ["snehal", "twinkle"] }
    }, {
        "salary": 20000
    }]
});

//or
db.users.find({
    "$or": [{
        "name": { "$in": ["snehal", "twinkle"] }
    }, {
        "salary": 50000
    }]
});

//eq
db.users.find({
    "salary": { "$eq": 20000 }
});

//ne
db.users.find({
    "salary": {
        "$ne": 20000
    }
});

//gt
db.users.find({
    "salary": {
        "$gt": 25000
    }
});

//gte
db.users.find({
    "salary": {
        "$gte": 25000
    }
});

//lt
db.users.find({
    "salary": {
        "$lt": 15000
    }
});

//lte
db.users.find({
    "salary": {
        "$lte": 15000
    }
});

//not
db.users.find({
    "salary": {
        "$not": {
            "$lt": 15000
        }
    }
});

//regex
db.users.find({
    "name": {
        "$regex": "r.*"
    }
});

//nor
db.users.find({
    "$nor": [{
        "salary" : {"$lte" : 20000}
    },{
       "name" : "snehal"
    }]
});

// exists
db.users.find({
    "salary" : {
        "$exists" : false , 
        "$in" : [15000,20000]
    }
});

//type
db.users.find({
    "salary" : {
         "$type" : "string"
    }
});
