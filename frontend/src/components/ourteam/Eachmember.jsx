export default function Eachmember({ speciality, name, tag, img }) {
  return (
    <div className="mt-10">
      <div className="text-[#000080] px-2 py-1 text-2xl md:text-2xl font-semibold border-[#7DF9FF] border-2 bg-[#7DF9FF] rounded z-50">
        {speciality}
      </div>
      <div className="z-50 border-4 bg-[#7DF9FF] border-[#7DF9FF] flex justify-around px-1 pt-2 py-4 rounded  md:rounded ">
        <div className="flex flex-col items-start">
          <span className="font-semibold text-md md:text-2xl mt-5">{name}</span>
          <span className="font-semibold text-md  md:text-2xl mt-2">{tag}</span>
        </div>
          <img className="w-40 " src={img} alt="doctorpic" />
      </div>
    </div>
  );
}
