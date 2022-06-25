const { Registration } = require('../models/registration.model')

//get all records
const getAllRegistrations = async (req, res) => {
    try {
        const registrations = await Registration.findAll()
        res.status(200).json({
            status: 'succes',
            registrations
        })
    } catch (error) {
        console.log(err)
    }

}

// Get a single record given an id
const getRegistrations = async (req, res) => {

    const { id } = req.params

    const registrationId = await Registration.findOne({ where: { id } });

    if (!registrationId) {
        return res.status(404).json({
            status: 'error',
            message: 'error Record not found'
        });

    }
    res.status(200).json({
        status: 'success',
        registrationId
    });
}

// Create a new record (stamp the entry time)
const createRegistrations = async (req, res) => {
    try {
        const { entranceTime } = req.body
        const newRegistration = await Registration.create({
            entranceTime
        });

        res.status(201).json({
            status: 'successfully created',
            newRegistration,
        });


    } catch (error) {
        console.log(error);
    };
}

// Update a record (stamping your check-out time)

const updateRegistrations = async (req, res) => {

    const { id } = req.params;
    const { exitTime } = req.body;

    const updateRegistration = await Registration.findOne({ where: { id } });

    if (!updateRegistration) {
        return res.status(404).json({
            status: 'Error',
            message: 'Record not found'
        });
    };

    await updateRegistration.update({ exitTime, status: 'Out' });

    res.status(201).json({
        status: 'success'
    });

}


//Cancel a record
const cancelRegistrations = async (req, res) => {

    const { id } = req.params;

    const cancel = await Registration.findOne({ where: { id } });

    if (!cancel) {
        return res.status(404).json({
            status: 'Error',
            message: 'Record not found'
        });
    };

    await cancel.update({ status: 'cancelled' });

    res.status(201).json({
        status: "success"
    });


}

module.exports = { getAllRegistrations, getRegistrations, createRegistrations, updateRegistrations, cancelRegistrations}