const prod = {
    hostname: "https://fullstack-backend-mjb.herokuapp.com"
};

const dev = {
    hostname: "http://localhost:3000"
};

const constants = process.env.REACT_APP_NODE_ENV === 'development' ? dev : prod;

export default constants;