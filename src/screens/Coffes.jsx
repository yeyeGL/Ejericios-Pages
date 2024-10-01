import { useState, useEffect } from "react";
import "../index.css";

const Coffes = () => {
  const [coffe, setCoffe] = useState(null);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
    )
      .then((res) => res.json())
      .then((data) => {
        setCoffe(data);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div className="bg-fondo min-h-screen relative overflow-auto">
      {/* Imagen de fondo principal */}
      <img src="/bg-cafe.jpg" alt="Fondo de cafe " className="h-48 w-full object-cover"/>
      {/* Segundo fondo y responsive */}
      <div className="absolute top-0 left-0 w-full h-full grid place-items-center p-4">
        <div className="bg-secondfondo p-10 md:p-12 lg:p-16 rounded-2xl text-white w-full max-w-md md:max-w-[80%] lg:max-w-[80%] h-[90%] flex flex-col items-center justify-center relative">
          {/* Contenido del segundo fondo */}
          <h1 className="text-4xl font-bold mb-3 text-center">Our Collection</h1>
          <p className="mb-3 text-2xl text-center">
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </p>
          <div className="space-x-4 mb-5">
            <button className="bg-button p-2 rounded-md mt-5">All Products</button>
            <button className="">Available Now</button>
          </div>
          {/* Imagen al lado del titulo "Our Collection" */}
          <img
            src="/vector.svg"
            className="absolute right-28 top-5 w-24 h-24 sm:w-24 sm:h-16 md:w-24 md:h-24 lg:w-48 lg:h-48"
          />

          {/* Grid para los productos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5 w-full">
            {coffe &&
              coffe.map((cof) => (
                <div key={cof.id} className="text-center">
                  <div className="relative">
                    <img src={cof.image} alt={cof.name} className="w-full h-52 rounded-2xl"/>
                    {cof.popular && (
                      <span className="absolute text-black font-bold bottom-40 left-4 p-1 rounded-xl bg-poppular">Popular</span>
                    )}
                  </div>

                  <div className="flex justify-between items-start mt-2">
                    <div className="text-left">
                      <h1 className="text-lg font-bold">{cof.name}</h1>
                      <h2 className="text-base flex items-center mb-2">
                        {cof.votes > 0 ? (
                          <>
                            <img src="/Star_fill.svg" alt="" className="mr-1 mb-1"/>
                            Rating: {cof.rating} ({cof.votes} votes)
                          </>
                        ) : (
                          <>
                            <img src="/Star.svg" alt="" className="mr-1 mb-1" />
                            Rating: No ratings
                          </>
                        )}
                      </h2>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="bg-price text-black font-bold p-1 rounded-lg">{cof.price}</span>
                      {!cof.available && (<h1 className="text-red-500 mt-1">Sold out</h1>)}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coffes;
