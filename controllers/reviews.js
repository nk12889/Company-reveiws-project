const Sequelize = require("sequelize");

const Review = require("../models/review");

exports.getReviews = async (req, res) => {
    try {
        const companyName = req.query.companyname;
        const companyDetails = await Review.findOne({ where: { companyname: { [Sequelize.Op.like]: `%${companyName}%` } } });
        res.status(200).json(companyDetails);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to get reviews' });
    }
};

exports.addReviews = async (req, res) => {
    try {
        console.log(req.body)
        const result = await Review.create({companyname:req.body.companyName,
            pros:req.body.companyPros,cons: req.body.companyCons,star:req.body.companyStar});
        res.status(200).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to add Review' });
    }
};
