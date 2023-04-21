import HomePage from "@/components/homePage";
import Head from "next/head";
import Script from "next/script";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Spotmies</title>
        <meta
          name="description"
          content="Spotmies is a leading provider of innovative solutions for Product Designing & Blockchain. With a team of experienced professionals & a commitment to excellence, we are dedicated to helping our clients achieve their goals and stay ahead of the competition. Our mission is to provide high-quality services & products that deliver tangible results and drive business success."
        />

        <link rel="shortcut icon" href="/favicon.ico" />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </Head>
      {/* <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
      </Script> */}

      <HomePage />
    </div>
  );
}
