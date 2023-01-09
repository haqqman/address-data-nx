import Image from 'next/image'
import {
  clientLogo1,
  clientLogo2,
  clientLogo3,
  clientLogo4,
  clientLogo5,
  clientLogo6,
  clientLogo7,
  clientLogo8,
} from '../public/assets/images/images_export'

export default function Clients({ lead }) {
  return (
    <>
      <div className="client-section ptb-100">
        <div className="container">
          {/*clients logo start*/}
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="section-heading text-center mb-5">
                <h2>Trusted by Companies</h2>
                <p className="lead">{lead}</p>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-md-12">
              <div className="overlay-opacity-gradient" />
              <div className="owl-carousel owl-theme clients-carousel dot-indicator">
                <div className="item single-client">
                  <Image
                    src={clientLogo1}
                    alt="client logo"
                    className="img-fluid client-img"
                  />
                </div>
                <div className="item single-client">
                  <Image
                    src={clientLogo2}
                    alt="client logo"
                    className="img-fluid client-img"
                  />
                </div>
                <div className="item single-client">
                  <Image
                    src={clientLogo3}
                    alt="client logo"
                    className="img-fluid client-img"
                  />
                </div>
                <div className="item single-client">
                  <Image
                    src={clientLogo4}
                    alt="client logo"
                    className="img-fluid client-img"
                  />
                </div>
                <div className="item single-client">
                  <Image
                    src={clientLogo5}
                    alt="client logo"
                    className="img-fluid client-img"
                  />
                </div>
                <div className="item single-client">
                  <Image
                    src={clientLogo6}
                    alt="client logo"
                    className="img-fluid client-img"
                  />
                </div>
                <div className="item single-client">
                  <Image
                    src={clientLogo7}
                    alt="client logo"
                    className="img-fluid client-img"
                  />
                </div>
                <div className="item single-client">
                  <Image
                    src={clientLogo8}
                    alt="client logo"
                    className="img-fluid client-img"
                  />
                </div>
              </div>
            </div>
          </div>
          {/*clients logo end*/}
        </div>
      </div>
    </>
  )
}
