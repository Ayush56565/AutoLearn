// pages/index.tsx

import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    redirect: {
      destination: '/create', 
      permanent: false,
    },
  };
};

const HomePage = () => {
  return null;
};

export default HomePage;