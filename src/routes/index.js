const appointmentRouter = require('./appointment');
const doctorRouter = require('./doctor');
const doctorSpeRouter = require('./doctorspe');
const userRouter = require('./user');
const authRouter = require('./auth');


module.exports = (app) => {

    app.use('/appointment', appointmentRouter);
    app.use('/doctor', doctorRouter);
    app.use('/doctorspe', doctorSpeRouter);
    app.use('/user', userRouter);
    app.use("/auth", authRouter);
}