import Record from "../models/record.model.js";

// CREATE
export const createRecord = async (data) => {
  return await Record.create(data);
};

// GET ALL (with filters)
export const getRecords = async (query) => {
  return await Record.find(query);
};

// UPDATE
export const updateRecord = async (id, data) => {
  return await Record.findByIdAndUpdate(id, data, { new: true });
};

// DELETE
export const deleteRecord = async (id) => {
  return await Record.findByIdAndDelete(id);
};
