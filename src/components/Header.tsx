import Image from "next/image";
import { images } from "@/constants/imageAssets";

const Header: React.FC = () => {
  return (
    <header className="bg-white text-center container-fluid py-2 row justify-content-center">
      {/* <Image src={images.logo1022} alt="Logo 1022" width={200} height={100} className="logo img-fluid mb-3" /> */}
      <div className="col-md-12 col-lg-9">
        <Image
          src={images.headerTitle}
          alt="Tổng đài dịch vụ công 1022 thông tin chính xác, kịp thời"
          width={600}
          height={1000}
          className="img-fluid image-wrap"
        />
      </div>
    </header>
  );
};

export default Header;
