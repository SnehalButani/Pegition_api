const Comment = require('../module/schema');
const express = require('express');
const { AutoEncryptionLoggerLevel } = require('mongodb');
const app = express();


//send module to router
module.exports = {
    Read: async (req, res) => {
        try {
            const Data = await Comment.find();
            res.status(200).json({ total: Data.length, Data });
        } catch (err) {
            const message = err.message;
            res.status(400).json(message);
        }
    },
    Pegition: async (req, res) => {
        try {
            let { page, limit } = req.query;

            if(page == 0) page = 1;
            if(limit == 0) limit = 10;
             
            const skip = (page - 1) * limit;
            const Data = await Comment
            .find()
            .limit(limit)
            .skip(skip)

            res.status(200).json({ total: Data.length, Data });
        } catch (err) {
            const message = err.message;
            res.status(400).json({message});
        }
    }
}


