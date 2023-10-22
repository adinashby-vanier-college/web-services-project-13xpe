const express = require("express");
const axios = require("axios");
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(bodyParser.urlencoded({ extended: true }));

const API_KEY = "185ba549-ae8b-4606-b1b1-58b05f85ae68";
const API_KEY1 = "90c98836fd653fffdc75eec71574d690";

const crypto_names = ["Bitcoin" , "Ethereum", "Ripple", "Dogecoin", "Solana"];
const cities = ["Toronto", "Montreal", "London", "Paris", "Rome", "Vancouver", "Ottawa"];

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
    try {
        const blogs = [
            { title: "Blog 1", snippet: "Lorem ipsum dolor sit amet consectetur" },
            { title: "Blog 2", snippet: "Lorem ipsum dolor sit amet consectetur" },
            { title: "Blog 3", snippet: "Lorem ipsum dolor sit amet consectetur" },
        ];
        let CRYPTO_NAME;
        let price;  
        const prices = [];
        const humidities = [];

        for (let i = 0; i < cities.length; i++) {
            const CITY_NAME = cities[i];
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY1}`);
            const humidity = response.data["main"]["humidity"];
            humidities.push({ city: CITY_NAME, hum: humidity });
        }

        for (let i = 0; i < crypto_names.length; i++) {
           
          if (i===0) {
          
          const CRYPTO_NAME = crypto_names[i];
            const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest', {
                headers: {
                    'X-CMC_PRO_API_KEY': API_KEY,
                },
                params: {
                    symbol: 'BTC',
                }
            });
            const price = response.data.data.BTC.quote.USD.price;
            prices.push({ name: CRYPTO_NAME, price: price });
          }
          if (i===1) {
          
            const CRYPTO_NAME = crypto_names[i];
              const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest', {
                  headers: {
                      'X-CMC_PRO_API_KEY': API_KEY,
                  },
                  params: {
                      symbol: 'ETH',
                  }
              });
              const price = response.data.data.ETH.quote.USD.price;
              prices.push({ name: CRYPTO_NAME, price: price });
            }
           
            if (i===2) {
          
              const CRYPTO_NAME = crypto_names[i];
                const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest', {
                    headers: {
                        'X-CMC_PRO_API_KEY': API_KEY,
                    },
                    params: {
                        symbol: 'XRP',
                    }
                });
                const price = response.data.data.XRP.quote.USD.price;
                prices.push({ name: CRYPTO_NAME, price: price });
              } 

              if (i===3) {
          
                const CRYPTO_NAME = crypto_names[i];
                  const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest', {
                      headers: {
                          'X-CMC_PRO_API_KEY': API_KEY,
                      },
                      params: {
                          symbol: 'DOGE',
                      }
                  });
                  const price = response.data.data.DOGE.quote.USD.price;
                  prices.push({ name: CRYPTO_NAME, price: price });
                } 

                if (i===4) {
          
                  const CRYPTO_NAME = crypto_names[i];
                    const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest', {
                        headers: {
                            'X-CMC_PRO_API_KEY': API_KEY,
                        },
                        params: {
                            symbol: 'SOL',
                        }
                    });
                    const price = response.data.data.SOL.quote.USD.price;
                    prices.push({ name: CRYPTO_NAME, price: price });
                  } 
           
        }

        res.render("index", { title: "Homepage", blogs, prices, humidities });
    } catch (error) {
        console.error(error);
        res.status(500).render("error", { title: "Error" });
    }
});

// *******************************************************************************************************
//                                Sending prices to the price page
//********************************************************************************************************

app.get("/price", async (req, res) => {
  try {

    let CRYPTO_NAME;
    let price;  
    const prices = [];

    for (let i = 0; i < crypto_names.length; i++) {
           
      if (i===0) {
      
      const CRYPTO_NAME = crypto_names[i];
        const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest', {
            headers: {
                'X-CMC_PRO_API_KEY': API_KEY,
            },
            params: {
                symbol: 'BTC',
            }
        });
        const price = response.data.data.BTC.quote.USD.price;
        prices.push({ name: CRYPTO_NAME, price: price });
      }
      if (i===1) {
      
        const CRYPTO_NAME = crypto_names[i];
          const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest', {
              headers: {
                  'X-CMC_PRO_API_KEY': API_KEY,
              },
              params: {
                  symbol: 'ETH',
              }
          });
          const price = response.data.data.ETH.quote.USD.price;
          prices.push({ name: CRYPTO_NAME, price: price });
        }
        if (i===2) {
          
          const CRYPTO_NAME = crypto_names[i];
            const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest', {
                headers: {
                    'X-CMC_PRO_API_KEY': API_KEY,
                },
                params: {
                    symbol: 'XRP',
                }
            });
            const price = response.data.data.XRP.quote.USD.price;
            prices.push({ name: CRYPTO_NAME, price: price });
          } 

          if (i===3) {
      
            const CRYPTO_NAME = crypto_names[i];
              const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest', {
                  headers: {
                      'X-CMC_PRO_API_KEY': API_KEY,
                  },
                  params: {
                      symbol: 'DOGE',
                  }
              });
              const price = response.data.data.DOGE.quote.USD.price;
              prices.push({ name: CRYPTO_NAME, price: price });
            } 

            if (i===4) {
      
              const CRYPTO_NAME = crypto_names[i];
                const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest', {
                    headers: {
                        'X-CMC_PRO_API_KEY': API_KEY,
                    },
                    params: {
                        symbol: 'SOL',
                    }
                });
                const price = response.data.data.SOL.quote.USD.price;
                prices.push({ name: CRYPTO_NAME, price: price });
              } 

       
        
    }
    
           
    res.render("price", { title: "Price Page", prices });
  } catch (error) {
    console.error(error);
    res.status(500).render("error", { title: "Error" });
  }
});
//********************************************************************************************************
//                                Sending market Capacity to the news 
//********************************************************************************************************
app.get("/news", async (req, res) => {
  try {

    let CRYPTO_NAME;
    let capacity;  
    const capacities = [];

    for (let i = 0; i < crypto_names.length; i++) {
           
      if (i===0) {
      
      const CRYPTO_NAME = crypto_names[i];
        const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest', {
            headers: {
                'X-CMC_PRO_API_KEY': API_KEY,
            },
            params: {
                symbol: 'BTC',
            }
        });
        const capacity = response.data.data.BTC.quote.USD.market_cap;
        capacities.push({ name: CRYPTO_NAME, cap: capacity });
      }
      if (i===1) {
      
        const CRYPTO_NAME = crypto_names[i];
          const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest', {
              headers: {
                  'X-CMC_PRO_API_KEY': API_KEY,
              },
              params: {
                  symbol: 'ETH',
              }
          });
          const capacity = response.data.data.ETH.quote.USD.market_cap;
        capacities.push({ name: CRYPTO_NAME, cap: capacity });
        }
        if (i===2) {
          
          const CRYPTO_NAME = crypto_names[i];
            const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest', {
                headers: {
                    'X-CMC_PRO_API_KEY': API_KEY,
                },
                params: {
                    symbol: 'XRP',
                }
            });
            const capacity = response.data.data.XRP.quote.USD.market_cap;
            capacities.push({ name: CRYPTO_NAME, cap: capacity });
          } 

          if (i===3) {
      
            const CRYPTO_NAME = crypto_names[i];
              const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest', {
                  headers: {
                      'X-CMC_PRO_API_KEY': API_KEY,
                  },
                  params: {
                      symbol: 'DOGE',
                  }
              });
              const capacity = response.data.data.DOGE.quote.USD.market_cap;
              capacities.push({ name: CRYPTO_NAME, cap: capacity });
            } 

            if (i===4) {
      
               const CRYPTO_NAME = crypto_names[i];
                const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest', {
                    headers: {
                        'X-CMC_PRO_API_KEY': API_KEY,
                    },
                    params: {
                        symbol: 'SOL',
                    }
                });
                const capacity = response.data.data.SOL.quote.USD.market_cap;

                capacities.push({ name: CRYPTO_NAME, cap: capacity });
              } 
       
    }
    res.render("news", { title: "News Page", capacities });
  } catch (error) {
    console.error(error);
    res.status(500).render("error", { title: "Error" });
  }
});




app.get("/about", (req, res) => {
   
    res.render("about", { title: "About Page" });
});
//*******************************************************************************************************
app.get('/converter', (req, res) => {
  res.render('converter', { title: 'Converter Page', results: null });
});

app.post('/converter', async (req, res) => {
  const userInput = req.body.number; // Assuming the input field has the name attribute set to "number"
  let results = [];

  try {

      let CRYPTO_NAME;
      let price;
      const prices = [];

      for (let i = 0; i < crypto_names.length; i++) {

          if (i === 0) {

              const CRYPTO_NAME = crypto_names[i];
              const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest', {
                  headers: {
                      'X-CMC_PRO_API_KEY': API_KEY,
                  },
                  params: {
                      symbol: 'BTC',
                  }
              });
              const price = response.data.data.BTC.quote.USD.price;
              results.push({ name: CRYPTO_NAME, result: userInput / price });
          }
          if (i === 1) {

              const CRYPTO_NAME = crypto_names[i];
              const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest', {
                  headers: {
                      'X-CMC_PRO_API_KEY': API_KEY,
                  },
                  params: {
                      symbol: 'ETH',
                  }
              });
              const price = response.data.data.ETH.quote.USD.price;
              results.push({ name: CRYPTO_NAME, result: userInput / price });
          }
          if (i === 2) {

              const CRYPTO_NAME = crypto_names[i];
              const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest', {
                  headers: {
                      'X-CMC_PRO_API_KEY': API_KEY,
                  },
                  params: {
                      symbol: 'XRP',
                  }
              });
              const price = response.data.data.XRP.quote.USD.price;
              results.push({ name: CRYPTO_NAME, result: userInput / price });
          }

          if (i === 3) {

              const CRYPTO_NAME = crypto_names[i];
              const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest', {
                  headers: {
                      'X-CMC_PRO_API_KEY': API_KEY,
                  },
                  params: {
                      symbol: 'DOGE',
                  }
              });
              const price = response.data.data.DOGE.quote.USD.price;
              results.push({ name: CRYPTO_NAME, result: userInput / price });
          }

          if (i === 4) {

              const CRYPTO_NAME = crypto_names[i];
              const response = await axios.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest', {
                  headers: {
                      'X-CMC_PRO_API_KEY': API_KEY,
                  },
                  params: {
                      symbol: 'SOL',
                  }
              });
              const price = response.data.data.SOL.quote.USD.price;
              results.push({ name: CRYPTO_NAME, result: userInput / price });
          }
      }

      res.render("converter", { title: "Converter Page", results });
    } catch (error) {
      console.error(error);
      res.status(500).render("error", { title: "Error" });
    }
  });
  
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });

