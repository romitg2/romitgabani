function Available() {
  const response = new Date();
  console.log(response);

  const formattedDate = response.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  console.log(formattedDate);

  return (
    <div className=" fixed top-12 right-[4vw] ">
      <div className=" flex gap-2 ">
        <div className="h-4 w-4 rounded-[100%] bg-green-600"></div>
        <div className="italic text-sm">Available, {formattedDate} </div>
      </div>
    </div>
  );
}

export default Available;
