const History = require('../model/History');
const { StatusCodes } = require('http-status-codes');
const customError = require('../errors');
const { search } = require('./Gemini');

const createHistory = async (req, res) => {
    try {
        const { title, body } = req.body;
        const userId = req.user.userId;
        const history = await History.create({ title, body, createdBy: userId });
        res.status(StatusCodes.CREATED).json({ history });
    } catch (error) {
        console.error(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
    }
};

const getAllHistory = async (req, res) => {
    try {
        const userId = req.user.userId;
        const history = await History.find({ createdBy: userId });
        res.status(StatusCodes.OK).json({ history, count: history.length });
    } catch (error) {
        console.error(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
    }
};

const getSingleHistory = async (req, res) => {
    try {
        const historyId = req.params.id;
        const history = await History.findById(historyId);
        if (!history) {
            throw new customError.NotFoundError('History not found');
        }
        res.status(StatusCodes.OK).json({ history });
    } catch (error) {
        console.error(error);
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });
    }
};

module.exports = { createHistory, getAllHistory, getSingleHistory };
