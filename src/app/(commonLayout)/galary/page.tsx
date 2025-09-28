import Image from "next/image";
import mango from "../../../assets/mango-local.jpg";
const page = () => {
  return (
    <div className="flex flex-col mx-auto">
      <p className="text-3xl font-bold ">Profile Photos</p>
      <div className="grid grid-cols-2 mt-5  items-center justify-center">
        <div>
          <p>Mango loaded using img tag from remote</p>
          <img
            src="https://belescooverseas.com/wp-content/uploads/2024/04/Mango.jpeg"
            alt=""
            height={300}
            width={300}
          />
        </div>
        <div>
          <p>Mongo loaded using Image tag from remote</p>
          <Image
            src={
              "https://belescooverseas.com/wp-content/uploads/2024/04/Mango.jpeg"
            }
            width={300}
            height={300}
            alt="Profele-Photo"
          />
        </div>
        <div>
          <p>Mongo loaded using Image tag from public</p>
          <Image
            src="/mango-local.jpg"
            width={300}
            height={300}
            alt="Profele-Photo"
          />
        </div>
        <div>
          <p>Mongo loaded using Image tag from assets</p>
          <Image src={mango} width={300} height={300} alt="Profele-Photo" />
        </div>
      </div>
    </div>
  );
};

export default page;
