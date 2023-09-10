import Image from "next/image";

const Custom404 = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen flex-col">
        <Image src="/404.png" alt="404 image" width={275} height={182}/>
        <p>Opps Halaman Tidak Ditemukan</p>
      </div>
    </>
  );
};

export default Custom404;
