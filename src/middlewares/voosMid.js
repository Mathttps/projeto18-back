export async function validateExistingCity(req, res, next) {
    const { name } = req.params;

    try {
        const city = await getFlights(name);
        if (city.rowCount === 0) {
            return res.status(404).send({ message: "Error" });
        }
        next();
    } catch (err) {
        res.status(500).send(err.message);
    }
}

export async function validateId(req, res, next) {
    const { id } = req.params;

    try {
        const flight = await getFlightDetails(id);
        if (flight.rowCount === 0) {
            return res.status(404).send({ message: "Error" });
        }
        next();
    } catch (err) {
        res.status(500).send(err.message);
    }
}