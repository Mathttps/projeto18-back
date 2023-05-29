export function validateParams(req, res, next) {
    const {authoriziation} = req.headers;
    const token = authoriziation.replace("Bearer ", "")

     if(!token) return res.sendStatus(401);
    next();
    }