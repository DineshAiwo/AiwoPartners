import { useEffect, useRef } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import videoHexagon from "@/assets/video-hexagon.mp4";

const Apply = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Create iframe
    const iframe = document.createElement("iframe");
    let ifrmSrc = "https://forms.zohopublic.in/aiwocrm1/form/PartnerRegistrationForm/formperma/1zeto95QCigqZALVg3emSChkxgtgH2yHZFwFOdndWC0?zf_rszfm=1";

    iframe.src = ifrmSrc;
    iframe.style.border = "none";
    iframe.style.height = "1107px";
    iframe.style.width = "100%";
    iframe.style.transition = "all 0.5s ease";
    iframe.setAttribute("aria-label", "Partner Registration Form");

    containerRef.current.appendChild(iframe);

    // Handle dynamic height resize from Zoho
    const handleMessage = (event: MessageEvent) => {
      const evntData = event.data;
      if (evntData && typeof evntData === "string") {
        const zf_ifrm_data = evntData.split("|");
        if (zf_ifrm_data.length === 2 || zf_ifrm_data.length === 3) {
          const zf_perma = zf_ifrm_data[0];
          const zf_ifrm_ht_nw = (parseInt(zf_ifrm_data[1], 10) + 15) + "px";
          
          if (containerRef.current) {
            const currentIframe = containerRef.current.getElementsByTagName("iframe")[0];
            if (currentIframe && currentIframe.src.indexOf("formperma") > 0 && currentIframe.src.indexOf(zf_perma) > 0) {
              const prevIframeHeight = currentIframe.style.height;
              const zf_tout = zf_ifrm_data.length === 3;
              
              if (zf_tout) {
                currentIframe.scrollIntoView();
              }
              
              if (prevIframeHeight !== zf_ifrm_ht_nw) {
                if (zf_tout) {
                  setTimeout(() => {
                    currentIframe.style.height = zf_ifrm_ht_nw;
                  }, 500);
                } else {
                  currentIframe.style.height = zf_ifrm_ht_nw;
                }
              }
            }
          }
        }
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <>
      <PageHeader
        title="Become an AIWO Partner"
        subtitle="Start building your legacy in longevity today."
        backgroundVideo={videoHexagon}
      />

      <section className="section">
        <div className="container mx-auto px-6">
          <div 
            ref={containerRef}
            className="max-w-4xl mx-auto rounded-2xl overflow-hidden bg-white"
          />
        </div>
      </section>
    </>
  );
};

export default Apply;
