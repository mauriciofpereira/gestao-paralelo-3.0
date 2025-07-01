import { Request, Response } from 'express';
import User from '../models/User';
import WorkLog from '../models/WorkLog';

export const createUser = async (req: Request, res: Response) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const getUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const updateUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).send();
        }
        res.send(user);
    } catch (error) {
        res.status(500).send(error);
    }
};

export const createWorkLog = async (req: Request, res: Response) => {
    try {
        const workLog = new WorkLog(req.body);
        await workLog.save();
        res.status(201).send(workLog);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const getWorkLogs = async (req: Request, res: Response) => {
    try {
        const workLogs = await WorkLog.find({});
        res.send(workLogs);
    } catch (error) {
        res.status(500).send(error);
    }
};