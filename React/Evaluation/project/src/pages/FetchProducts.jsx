const FetchProducts = async (productId) => {
    try {
      const response = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?filter=men&page=1&limit=5&sort=price&order=asc`);
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Failed to fetch product details');
      }
      return await response.json();
    } catch (error) {
      throw error;
    }
  };
export default FetchProducts;
