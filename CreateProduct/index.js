const createMongoClient = require('../shared/mongoClient');

module.exports = async function (context, req) {
    const product = req.body;


    const { client: MongoClient, closeConnectionFnc } = await createMongoClient();
    const Products = MongoClient.collection('products');
    const res = await Products.insert(product);


    closeConnectionFnc();
    context.res = {
        status: 201,
        body:res,
    };
};