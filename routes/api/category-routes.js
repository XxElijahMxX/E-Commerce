const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  Category.findAll({
    include: {
      model: Product,
      attributes: ['category_id', 'id', 'product_name', 'stock', 'price']
    }
  })
  .then(prodData => {
    if(!prodData) {
      res.status(404).json({message: 'Requested category not found'});
      return;
    }
    res.json(prodData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err)
  })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  Category.findOne({
    where: {
      id: req.params.id
    },
    include: {
      model: Product,
      attributes: ['category_id', 'id', 'product_name', 'stock', 'price']
    }
  })
  .then(prodData => {
    if(!prodData) {
      res.status(404).json({message: 'Requested category not found'});
      return;
    }
    res.json(prodData);
  })
  .catch(err => {
    console.log(err);
  res.status(500).json(err)
    });
  });

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;