const Application = require('./framework/application');
const userRouter = require('./src/user-router');
const jsonParser = require('./framework/parseJson');
const urlParser = require('./framework/parseUrl');
const mongoose = require("mongoose");

const app = new Application();

app.use(jsonParser);
app.use(urlParser('https://localhost:3000'));

app.addRouter(userRouter);

const start = async () => {
    try {
        await mongoose.connect(`mongodb+srv://dianasheptak:nuZTfYI6dCKJ9rpL@cluster0.ej3qp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
        app.listen(3000, () => console.log('mongo db connected...'))
    }
    catch(e) {
        console.log(e)
    }
}

start()