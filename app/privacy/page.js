import Nav from '../../components/Nav'
import Footer from '../../components/Footer'

export const metadata = {
  title: 'Privacy Policy — URunner',
}

export default function PrivacyPage() {
  return (
    <>
      <Nav />

      <section className="page-hero">
        <div className="section-tag">Legal</div>
        <h1>Our <em>Privacy Policy</em> 🛡️</h1>
        <p>
          This privacy policy ("policy") will help you understand how URunner ("us", "we", "our") uses and protects the data you provide to us when you visit and use the URunner website and mobile application ("website", "service"). We reserve the right to change this policy at any given time, of which you will be promptly updated.
        </p>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="section-inner">
          <div className="prose">

            <h2>What User Data We Collect</h2>
            <p>When you visit the website and mobile application, we may collect the following data:</p>
            <ul>
              <li>Your IP address</li>
              <li>Your contact information and email address</li>
              <li>Other information such as steps and calories on the mobile application (Apple Health Kit on iOS, Google Health Kit on Android)</li>
              <li>Data regarding your location and online behavior on our website or mobile application</li>
            </ul>

            <h2>Why We Collect Your Data</h2>
            <ul>
              <li>To calculate your daily Activity Score ®</li>
              <li>To integrate into the algorithms for Activity Score ® and virtual URunner coins</li>
              <li>To better understand your fitness needs</li>
              <li>To improve our services and products</li>
              <li>To provide better solutions for improved fitness</li>
              <li>We are collecting your email address</li>
              <li>To communicate URunner updates</li>
              <li>To send you promotional emails containing the information we think you will find interesting</li>
              <li>To contact you to fill out surveys and participate in other types of market research</li>
              <li>We are collecting your location</li>
              <li>To customize our website and mobile application according to your online behavior and personal preferences</li>
            </ul>

            <h2>Safeguarding and Securing the Data</h2>
            <p>
              URunner is committed to securing your data and keeping it confidential. URunner has done all in its power to prevent data theft, unauthorized access, and disclosure by implementing the latest technologies and software, which help us safeguard all the information we collect online. User steps calories and email data is stored on secure cloud platforms. URunner does not share user data with any other entities without explicit user consent.
            </p>

            <h2>Our Cookie Policy</h2>
            <p>
              Once you agree to allow our website to use cookies, you also agree to use the data it collects regarding your online behavior (various web traffic, web pages you spend the most time on, and websites you visit). The data we collect by using cookies is used to customize our website to your needs. After we use the data for statistical analysis, the data is completely removed from our systems. Please note that cookies don't allow us to gain control of your computer in any way. They are strictly used to monitor which pages you find useful and which you do not so that we can provide a better experience for you. If you want to disable cookies, you can do it by accessing the settings of your internet browser.
            </p>

            <h2>Links to Other Websites</h2>
            <p>
              Our website and mobile application may contain links that lead to other websites. If you click on these links URunner is not held responsible for your data and privacy protection. Visiting those websites is not governed by this privacy policy agreement. Make sure to read the privacy policy documentation of the website you go to from our website.
            </p>

            <h2>Restricting the Collection of your Personal Data</h2>
            <p>
              At some point, you might wish to restrict the use and collection of your personal data. You can achieve this by doing the following: When you are filling the forms on the website, make sure to check if there is a checkbox that you can leave unchecked, if you don't want to disclose your personal information. If you have already agreed to share your information with us, feel free to contact us via email and we will be more than happy to change this for you. URunner will not lease, sell or distribute your personal information to any third parties, unless we have your permission. We might do so if the law forces us. Your personal information will be used when we need to send you promotional materials if you agree to this privacy policy.
            </p>

            <h2>Data Deletion</h2>
            <p>
              You can delete your account at any time through the account tab in the URunner App. Deleting the account removes all user data from the URunner systems. You can also contact us at info@urunner.io to request either entire deletion of account or a specific data component.
            </p>

            <p style={{ marginTop: 48, fontSize: 13, color: 'var(--t3)' }}>
              Copyright @URunner 2025 – All rights reserved
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
