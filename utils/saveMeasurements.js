async function mapData(incomingData) {
    let measurementData = {
        timestamp: null,
        measurement: null,
        setpoint: null,
        valve: null,
        P: null,
        I: null,
        D: null
    };
    
    // Gå igenom alla taggar i data
    for (const tag in incomingData) {
        if (incomingData.hasOwnProperty(tag)) {
            const timestamp = incomingData[tag].Timestamp;
            const value = incomingData[tag].Value;

            measurementData.timestamp = timestamp;

            if (tag.endsWith('_PV')) {
                measurementData.measurement = value;
            } else if (tag.endsWith('_SP')) {
                measurementData.setpoint = value;
            } else if (tag.endsWith('_OP')) {
                measurementData.valve = value;
            } else if (tag.endsWith('_P')) {
                measurementData.P = value;
            } else if (tag.endsWith('_I')) {
                measurementData.I = value;
            } else if (tag.endsWith('_D')) {
                measurementData.D = value;
            }
        }
    }

    return measurementData;  // Returnera alla mappade taggar
}

module.exports = {
    mapData
};
