const application = require('./app');
const port = 3002;

application.express.listen(port, () => {
    console.log(`Application is running on port: ${port}`);
});