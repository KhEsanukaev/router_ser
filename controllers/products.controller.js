
module.exports.productsController = {
    getProducts: (req, res) => {
        res.json('all products')
      },

    getProductById: (req, res) => {
        res.json(`продукт под ид ${req.params.id} выведен`)
      },
  
    createProducts: (req, res) => {
      // код добавления сообщений
    },
  
    deleteProducts: (req, res) => {
      // код удаления сообщения
    },
  };