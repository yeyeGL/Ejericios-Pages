import { useEffect, useState } from "react";

const Worlds = () => {
  const [country, setCountry] = useState();

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCountry(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-treefondo min-h-screen relative overflow-auto">
      <div className="relative text-center">
        <img
          src="/world/Logo.svg"
          alt="Logo"
          className="absolute top-4 left-4"
        />
      </div>
  
      <div className="relative">
        <img
          src="/world/hero-image-wr.jpg"
          alt="Hero"
          className="w-full h-60 object-cover"
        />
        <img
          src="/world/Logo.svg"
          alt="Logo"
          className="absolute bottom-32 right-[750px] h-6 w-auto"
        />
      </div>
  
      <div className="absolute top-40 left-0 w-full h-full grid place-items-center p-4">
        <div
          className="bg-secondfondo p-10 md:p-12 lg:p-16 rounded-lg text-white w-full 
          md:max-w-[95%] lg:max-w-[95%] h-auto flex flex-col items-center relative mb-4"
        >
          {/* Navbar with Search Input */}
          <div className="flex justify-between items-center w-full mb-8">
            <h2 className="text-lg text-patodo">Country List</h2>
            <input
              type="text"
              placeholder="Search by Name, Region, Subregion"
              className="font-semibold text-white bg-treefondo rounded-xl mb-8 p-2 placeholder:text-letra w-72 "
            />
          </div>
  
          {/* Flex Container for Table and Filters */}
          <div className="flex w-full">
            {/* Country Table */}
            <div className="flex-grow">
              {country && (
                <div className="overflow-auto">
                  <table className="min-w-full shadow-md rounded-lg divide-y divide-patodo">
                    <thead className="">
                      <tr>
                        <th className="py-3 px-4 text-left text-letra">Flag</th>
                        <th className="py-3 px-4 text-left text-letra">Name</th>
                        <th className="py-3 px-4 text-left text-letra">Population</th>
                        <th className="py-3 px-4 text-left text-letra">Area (km²)</th>
                        <th className="py-3 px-4 text-left text-letra">Region</th>
                      </tr>
                    </thead>
                    <tbody>
                      {country.map((contr) => (
                        <tr key={contr.id}>
                          <td className="py-3 px-4">
                            <img src={contr.flags.svg} alt={contr.name.common} className="h-full w-16"/>
                          </td>
                          <td className="py-3 px-4">{contr.name.common}</td>
                          <td className="py-3 px-4">{contr.population.toLocaleString()}</td>
                          <td className="py-3 px-4">{contr.area.toLocaleString()}</td>
                          <td className="py-3 px-4">{contr.region}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
  
          
          </div>
        </div>
      </div>
    </div>
  );
  
};

export default Worlds;
