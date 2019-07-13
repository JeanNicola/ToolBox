'use strict'

class Controller {

    constructor() {

        this.example = (req, res, next) => {
            let text = req.body.text;
            if (!text) {
                res.status(400);
                return res.json({
                    response: "Bad request"
                })
            }
            return res.json({
                response: text
            })
        }

    }

}

module.exports = new Controller();