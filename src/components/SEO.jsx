import { Helmet } from 'react-helmet-async';

export default function SEO() {
  return (
    <Helmet>
      <html lang="en" />
      <title>Khoirul - Programmer | Data Analyst | Forex Trader</title>
      <meta name="description" content="Professional portfolio of Khoirul - Full Stack Developer, Data Analyst, and Forex Trader with 9+ years of experience." />
      <meta name="keywords" content="programmer, data analyst, forex trader, react, python, portfolio" />
      <meta name="author" content="Khoirul" />
      <meta property="og:title" content="Khoirul - Professional Portfolio" />
      <meta property="og:description" content="Full Stack Developer, Data Analyst, and Forex Trader" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <link rel="canonical" href="https://k-anwar.github.io/programmer" />
    </Helmet>
  );
}