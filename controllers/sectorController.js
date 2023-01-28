const Sector = require("./../models/sectorModel");

exports.getSectors = async (req, res) => {
  try {
    const sector = await Sector.find();
    res.status(200).json({
      status: "success",
      length: sector.length,
      data: {
        sector,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createSector = async (req, res) => {
  try {
    const sector = await Sector.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        sector,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
