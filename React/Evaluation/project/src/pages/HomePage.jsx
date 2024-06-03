import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Grid, GridItem, Select, Text, Button } from '@chakra-ui/react';

const useSearchParams = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const [sortBy, setSortBy] = useState(searchParams.get('sortBy') || '');
  const [filterBy, setFilterBy] = useState(searchParams.get('filterBy') || '');

  useEffect(() => {
    const params = new URLSearchParams();
    if (sortBy) params.set('sortBy', sortBy);
    if (filterBy) params.set('filterBy', filterBy);
    history.pushState({}, '', `${location.pathname}?${params}`);
  }, [sortBy, filterBy]);

  return { sortBy, setSortBy, filterBy, setFilterBy };
};

const HomePage = () => {
  const { sortBy, setSortBy, filterBy, setFilterBy } = useSearchParams();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get('https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products');
        setProducts(response.data.data); 
      } catch (error) {
        setError('Failed to fetch products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterBy(e.target.value);
  };

  const filteredProducts = products?.filter(product => {
    if (!filterBy) return true;
    return product.category === filterBy;
  }).sort((a, b) => {
    if (sortBy === 'asc') return a.price - b.price;
    if (sortBy === 'desc') return b.price - a.price;
    return 0;
  }) || [];

  return (
    <div>
      <div>
        <Select placeholder="Sort by Price" value={sortBy} onChange={handleSortChange}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </Select>
        <Select placeholder="Filter by Category" value={filterBy} onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
          <option value="Kids">Kids</option>
          <option value="Home Decor">Home Decor</option>
        </Select>
      </div>
      {loading && <Text>Loading...</Text>}
      {error && <Text color="red">{error}</Text>}
      <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']} gap={6}>
        {filteredProducts.map(product => (
          <GridItem key={product.id}>
            <Text fontSize="xl">{product.title}</Text>
            <Text>Category: {product.category}</Text>
            <Text>Price: ${product.price}</Text>
            <Link to={`/product/${product.id}`}>
              <Button colorScheme="blue">More Details</Button>
            </Link>
          </GridItem>
        ))}
      </Grid>
    </div>
  );
};

export default HomePage;
