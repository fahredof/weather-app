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
        .catch(e => {
                res.send(e);
        });
    //console.log(req.params);
});

router.post("/favorites", (req, res) => {
    City.create(req.body)
        .then((city) => {
            res.send(city);
        });
});

router.put("/favorites", (req, res) => {
    let cityKey = req.params.key;
    let cityName = req.params.city;

    City.find()
        .select("cities")
        .populate("cities city")
        .then((data) => {
            res.send(data)
        })
        .catch(e => {
            res.send(e);
        })

});
/*router.put("/muggers/:id", (req, res) => {
   Mugger.findByIdAndUpdate({_id: req.params.id}, req.body)
       .then(() => {
           Mugger.findOne({_id: req.params.id})
               .then((mugger) => {
                   res.send(mugger);
               })
       })
       .catch(e => {
           res.send(e);
       })
});*/

router.delete("/favorites/:id", (req, res) => {
    City.deleteOne({_id: req.params.id})
        .then((city) => {
            res.send(city)
        })
        .catch(e => {
            res.send(e);
        })
});

module.exports = router;
