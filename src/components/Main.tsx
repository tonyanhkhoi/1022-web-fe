import Image from "next/image";
import { images } from "@/constants/imageAssets";

const Main: React.FC = () => {
  
  return (
    <main className="text-white py-4 px-5 bg-cuslor">
      <div className="container px-5">
        <section className="mb-4">
          <h3 className="text-center">Trợ lý số 1022 Test:</h3>
          <h5 className="extra-left-padding">
            Trợ lý hỗ trợ giải đáp thông tin của Tổng đài 1022. Là người hỗ trợ
            trực tuyến đáng tin cậy của Chính quyền TP. Đà Nẵng, phục vụ người
            dùng và cung cấp thông tin cần thiết cho cư dân, du khách và doanh
            nghiệp liên quan đến Đà Nẵng
          </h5>
        </section>

        <section className="mb-4">
          <h5 className="position-relative">
            <span className="extra-text-padding">Ứng dụng thông minh:</span>

            <a
              className="position-absolute start-50 translate-middle-x"
              href="http://onelink.to/danangSmartCity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="phone-number">Danang Smart City</span>
            </a>
          </h5>
          <div className="d-flex align-items-center justify-content-center">
            <Image
              src={images.city}
              alt="Danang Smart City"
              width={80}
              height={80}
              className="me-3"
            />
            <Image
              src={images.qrCode}
              alt="Danang Smart QR"
              width={80}
              height={80}
              className="me-3"
            />
          </div>
        </section>

        <section className="mb-4">
          <div className="position-relative" style={{ height: "40px" }}>
            <h5 className="position-absolute start-0 top-50 translate-middle-y m-0 extra-text-padding">
              Gửi góp ý - phản ánh hiện trường:
            </h5>
            <div className="position-absolute start-50 top-50 translate-middle d-flex extra-left-padding">
              <a
                href="http://zalo.me/tongdai1022danang"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                <Image
                  src={images.zaloIcon}
                  alt="Zalo"
                  width={40}
                  height={40}
                />
              </a>
              <a
                href="https://www.facebook.com/gopy.danang.3"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                <Image
                  src={images.facebookIcon}
                  alt="Facebook"
                  width={40}
                  height={40}
                />
              </a>
              <a
                href="tel:+842361022"
                rel="noopener noreferrer"
                className="mx-2"
              >
                <Image
                  src={images.phoneIcon}
                  alt="Phone"
                  width={40}
                  height={40}
                />
              </a>
              <a
                href="https://gopy.danang.gov.vn/"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                <h5 className="phone-number">
                  <u>Web</u>
                </h5>
              </a>
              <a
                href="http://onelink.to/gopydanang"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                <h5 className="phone-number">
                  <u>App</u>
                </h5>
              </a>
            </div>
          </div>
        </section>
        <section className="mb-4">
          <div className="position-relative" style={{ height: "40px" }}>
            <h5 className="position-absolute start-0 top-50 translate-middle-y m-0 extra-text-padding">
              Mạng xã hội:
            </h5>
            <div className="position-absolute start-50 top-50 translate-middle d-flex">
            <h5 className="mx-2 invi-text">Webaa</h5>
              <a
                href="http://zalo.me/tongdai1022danang"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                <Image
                  src={images.zaloIcon}
                  alt="Zalo"
                  width={40}
                  height={40}
                />
              </a>
              <a
                href="https://www.facebook.com/tongdai1022/"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                <Image
                  src={images.facebookIcon}
                  alt="Facebook"
                  width={40}
                  height={40}
                />
              </a>
              <a
                href="https://www.youtube.com/channel/UCOjoHsb-xyhVc7L3NC0y7gg"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2"
              >
                <Image
                  src={images.youtubeIcon}
                  alt="YouTube"
                  width={40}
                  height={40}
                />
              </a>
              <h5 className="mx-2 invi-text">Web</h5>
              <h5 className="mx-2 invi-text">App</h5>
            </div>
          </div>
        </section>

        <section className="mb-4">
          <h5 className="position-relative">
            <span className="extra-text-padding">Tổng đài tư vấn, giải đáp thông tin:</span>
            <span className="position-absolute start-50 translate-middle-x phone-number">
              0236 1022 <span style={{ color: "#ffffff" }}>hoặc</span> *1022
            </span>
          </h5>
        </section>
      </div>
    </main>
  );
};

export default Main;
