import Script from "next/script";

const GTagScript = () => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-T6MPFDXLBF"
      />
      <Script>
        {`window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'G-T6MPFDXLBF');`}
      </Script>
    </>
  );
};

export default GTagScript;
