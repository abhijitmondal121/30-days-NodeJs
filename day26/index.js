function getProductStatistics() {
    return db.products
      .aggregate([
        {
          $group: {
            _id: null,
            totalProducts: { $sum: 1 },
            averagePrice: { $avg: '$price' },
            highestQuantity: { $max: '$quantity' },
          },
        },
        {
          $project: {
            _id: 0,
            totalProducts: 1,
            averagePrice: { $round: ['averagePrice'] },
            highestQuantity: 1,
          },
        },
      ])
      .toArray()[0];
  }