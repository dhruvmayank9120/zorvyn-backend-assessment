import * as recordService from "../services/record.service.js";

// CREATE
export const create = async (req, res) => {
  try {
    const record = await recordService.createRecord({
      ...req.body,
      createdBy: req.user.id,
    });

    res.status(201).json(record);
  } catch (error) {
    res.status(500).json({ message: "Error creating record" });
  }
};

// GET ALL
export const getAll = async (req, res) => {
  try {
    const filters = {};

    if (req.query.type) filters.type = req.query.type;
    if (req.query.category) filters.category = req.query.category;

    const records = await recordService.getRecords(filters);

    res.json(records);
  } catch (error) {
    res.status(500).json({ message: "Error fetching records" });
  }
};

// UPDATE
export const update = async (req, res) => {
  try {
    const record = await recordService.updateRecord(req.params.id, req.body);

    res.json(record);
  } catch (error) {
    res.status(500).json({ message: "Error updating record" });
  }
};

// DELETE
export const remove = async (req, res) => {
  try {
    await recordService.deleteRecord(req.params.id);
    res.json({ message: "Deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting record" });
  }
};
