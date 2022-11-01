const axios = require('axios');
exports.getUser = (async (req, res) => {
    try {
        const response = await axios.get('https://script.google.com/macros/s/AKfycbzuE4HExzdaIyEqETAcenS9VVaQ1YIbxQjBzAo93lQeSf8ZbhTujHXNCUd1CQcMFp2-DQ/exec?action=readData');
        return response.data;
    } catch (error) {
        console.error(error);
        res.status(500).send('server internal error');
    };
});