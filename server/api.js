const express = require("express");
const router = express.Router();
const City = require("./city");
const fetch = require("node-fetch");

const API_KEY = "f77919380546d1f6ef8015d53089ba0e";
const defaultCity = "Ufa";

const fetchByCity = async (api_key, city) => {
    const response =
        await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`);
    let dataByCity;
    if (response.ok) {
        dataByCity = await response.json();
    } else {
        dataByCity = {error: "The server responded with a status of " + response.status}
    }
    return dataByCity;
};

const fetchByCoordinates = async (api_key, latitude, longitude) => {
    const response =
        await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}`);
    let dataByCoor;
    if (response.ok) {
        dataByCoor = await response.json();
    } else {
        dataByCoor = {error: response.status}
    }
    return dataByCoor;
};

router.get("/weather", (request, response) => {
    let city = request.query.city;

    if (city === undefined) {
        city = defaultCity;
    }

    fetchByCity(API_KEY, city)
        .then(data => {
            response.send(data)
        })
        .catch(e => {
            console.log(e)
        });
});

router.get("/weather/coordinates", (request, response) => {
    let lat = request.query.lat;
    let lon = request.query.lon;

    fetchByCoordinates(API_KEY, lat, lon)
        .then(data => {
            response.send(data)
        })
        .catch(e => {
            console.log(e)
        });
});

// DB ----------------------------
router.get("/favorites", (req, res) => {
    City.find({})
        .then((city) => {
            res.send(city);
        })
        .catch(error => {
                res.send(error);
        });
});

router.post("/favorites", (req, res) => {
    City.create(req.body)
        .then((city) => {
            res.send(city);
        })
        .then(console.log(req.body.cities))
        .catch(error => {
                res.send(error);
        });
});

router.delete("/favorites", (req, res) => {
    let id = req.query.cityId;
    City.findOneAndDelete({cityId: id})
        .catch(error => {
            res.send(error);
        });
});

module.exports = router;
