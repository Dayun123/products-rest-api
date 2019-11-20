exports.validateProductKeys = (req, res, next) => {
  
  const requiredProductKeys = [
    'id',
    'name',
    'price',
    'category',
  ];

  const requestProductKeys = Object.keys(req.body);

  if (!requiredProductKeys.every(key => requestProductKeys.includes(key))) {
    next({
      statusCode: 422,
      statusMessage: 'To create a product the keys id, name, price, and category are required',
    });
  }

  next();

};

exports.validateContentType = (req, res, next) => {
  
  if (req.get('Content-Type') !== 'application/json') {
    next({
      statusCode: 400,
      statusMessage: 'Content-Type must be application/json',
    });
  }

  next();
};

exports.validateId = id => !isNaN(id) && id > 1;