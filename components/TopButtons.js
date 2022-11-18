const TopButtons = () => {

  const cities = [
    {
      id: 1,
      name: "Amman"
    },
    {
      id: 2,
      name: "London"
    },
    {
      id: 3,
      name: "Tokyo"
    },
    {
      id: 4,
      name: "Paris"
    },
    {
      id: 5,
      name: "New York"
    },
  ]

  return (
    <div className="flex items-center justify-around ">
      { cities.map((city) => (
        <button key={city.id} className="text-md font-medium my-6">{ city.name }</button>
      ))}
    </div>

  )
};

export default TopButtons;