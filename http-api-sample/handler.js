"use strict";

const axios = require('axios');

module.exports.handler = async (event) => {
  if (!event.multiValueQueryStringParameters.cep || !event.multiValueQueryStringParameters.cep.length) {
    throw new Error('Cep is required!');
  }

  const reponseRequest = await axios.get(`https://viacep.com.br/ws/${event.multiValueQueryStringParameters.cep[0]}/json/`);
  if (!reponseRequest || !reponseRequest.data) {
    throw new Error('invalid response!');
  }
  
  const response = {
    zipcode: reponseRequest.data.cep,
    country: 'Brazil',
    province: reponseRequest.data.uf,
    city: reponseRequest.data.localidade,
    district: reponseRequest.data.bairro,
    street: reponseRequest.data.logradouro
  }

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*"
    },
    body: JSON.stringify(response),
  };
};
