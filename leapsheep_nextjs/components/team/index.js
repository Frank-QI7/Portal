import React from 'react';
import {Container, Grid} from "@material-ui/core";
import Outer from "../outer";

import {IntroLeft,IntroRight} from "../../components/member_intro/index"

function Team() {
    return (
        <div>
            <div id="team">
                <Outer name="Our Team" Component={component} color="white"/>
            </div>
        </div>
    )
}

function component() {
    return(
        <div>
            <Container maxWidth="md">
                <Grid container spacing={4}  justify="center" alignItems="center">
                    <IntroLeft name="Kirk Drage" position="CEO" image="/Krik_Drage.png" twitter="https://twitter.com/@kdrage" linkedin="https://www.linkedin.com/in/kirk-drage-37853a" words={["My career has been driven by 3 keen interests; Digital Technology, Scalable Business Models and the Human Condition. Since starting a PC business at university, my roles have necessitated maintaining a deep understanding of leading edge digital technologies. Since encouraging executives at my first summer job in an aluminium foundry to adopt spreadsheets in the late ’80’s, I have been honing my ability to communicate to business leaders how technology can transform the scalability of a business.",
                        "More recently, international leadership roles spanning Fortune 500, Silicon Valley start-ups, business development in over 20 countries, and placing investment in early-stage companies have led me to develop a passion for empowering people to develop and mature their abilities to build companies, create jobs, distribute wealth and generate positive social impact."]}
                    />
                    <IntroRight name="Kathryn Heaton" position="COO" image="/Kathryn_Heaton.png" twitter="https://twitter.com/@kathrynmheaton" linkedin="https://www.linkedin.com/in/kathryn-heaton-a8b511a" words={["My career has been centered around the desire to make people successful, to help them both personally and professionally. After many years working at both a national and international level for companies such as Hewlett Packard as a Service Delivery Executive, in Service Management, Service Delivery and Business Operations, the creation of LeapSheep has provided the perfect vehicle to make this desire a reality. LeapSheep focuses on accelerating the abilities of entrepreneurs and business leaders to build value and valuation in their software companies.","My other passion of giving back to the community has been fulfilled by being a member of the Australian IT Service Management Forum where I focused my energy on improving the management and success of the forum, expanding, and maturing the National Conference to become the premier Service Management conference in the region and being on the International Board for 2 years, including in the role of Chair. In the last 12 months I have been completely focused on building our internal capability to provide an excellent LeapSheep experience for both our customers and employees."]}
                    />
                    <IntroLeft name="Monica Drage" position="CUSTOMER SUCCESS" image="/Monica_Drage.png" twitter="" linkedin="https://www.linkedin.com/in/monica-wang-a7858646" words={["I love helping people and my previous roles have all been centered around assisting people to achieve their outcomes. I thrive on the opportunity to meet new people and hear their stories and this has naturally lead to my role at LeapSheep of Customer Experience Lead ensuring that our customers receive a thoughtful and consistent experience in all their interactions with us."]}
                    />
                    <IntroRight name="Sarah Bell" position="HEAD OF RESEARCH" image="/Sarah Bell.png" twitter="" linkedin="https://www.linkedin.com/in/sarah-bell-59422814" words={["I’m passionate about uncovering world leading people, process and technologies that can be used to transform employee and customer experiences and power the hyper-growth businesses.","Previous roles have included consulting (and qualifying as a chartered accountant) at professional services firm KPMG to working in Strategy for the UK government healthcare regulator.","I head LeapSheep’s Research which spans Technology Trends, Business Process Innovation, Industry Trends, Disruptive Innovators and User Research. Our investment in research seeks to ensure we’re able to offer world class support to hyper-growth business builders in the global market."]}
                    />
                    <IntroLeft name="Terri Soar" position="PRODUCT MANAGER" image="/Terri_Soar.png" twitter="" linkedin="https://www.linkedin.com/in/terrisoar/" words={["I’m passionate about customers getting the products and service they love! And with over 15 years of experience in strategic customer service and sales business operations across Optus, including leading projects and business improvement initiatives, the transition into Product Management with LeapSheep is the perfect fit.","As Product Manager, my focus is to develop LeapSheep’s unique product offerings with a customer-centric approach, and in context of market dynamics, business objectives, technology trends, and best practise from entrepreneurship and new economy thought leaders from around the world. Using an agile process, delivery of new product features, benefits and improvements is ongoing to our customer-base of founders/business builders."]}
                    />
                    <IntroRight name="Lucas Guimaraes" position="BUSINESS BUILDING ADVISOR" image="/Lucas_Guimaraes.png" twitter="" linkedin="https://www.linkedin.com/in/lucas-g-87356" words={["Entrepreneurship is my passion. Building teams around common values and goals is the work I have chosen for life. As an entrepreneur, founder of three businesses in very different industries, I have experience in executive positions across a wide range of functions such as finance, customer service and international product procurement. But B2B marketing and sales is the area where I have developed a highly intensive expertise.","As Business Building Advisor at LeapSheep, I combine my previous experiences with the continuous learning provided every day by our amazing team to support start-up founders searching for hyper-growth business strategies and structuring their marketing and sales operations."]}
                    />
                    <IntroLeft name="Quin Le" position="RESEARCH ASSISSTANT" image="/Quin_Le.png" twitter="" linkedin="https://www.linkedin.com/in/lequynh144" words={["I have a solid background in Business and Marketing having graduated as a Bachelor of Business (Marketing) from the University of South Australia and a Bachelor of General Marketing from the University of Finance and Marketing. My first role at E-commerce leader Lazada Group – in Southeast Asia gave me the experience of working at a start-up and helped me to recognise my passion for working in a fast-paced entrepreneurial environment.","Since joining LeapSheep, I have used my market research skills and business management knowledge to produce a variety of leadership training modules designed to support start-up businesses. Focusing on Technology Trends, Market Trends, Business Innovation and User Research, LeapSheep embraces the philosophy that every employee is the leader of their project whilst at the same time being provided with mentorship and support from other team members. I am also encouraged to take advantage of professional development opportunities to build my skills and experience."]}
                    />
                    <IntroRight name="Shen Tan" position="DATA ANALYST" image="/Shen_Tan.png" twitter="" linkedin="https://www.linkedin.com/in/tan-sheng-hwee-shen-a1634012a" words={["I’ve developed my skills in event management, analytics, problem solving and I’ve recently graduated from International Business Bachelor’s Degree in University of South Australia majoring in Economics and had Accounting and Psychology background during my college years. I am passionate in solving people’s problem and always wanted to be in the consulting sector but it got even better when I got myself into Startup Incubation.","At LeapSheep, I’ve leveraged my passion in analytical related tasks to analyse the performance and processes of it’s business operations across different areas of the business. My job scope is focused on Data Analytics, System Development and Technology Research that delivers value to clients by providing automation to their business processes. I’m fortunate to join LeapSheep as the team uphold the company’s values and LeapSheep offers numerous opportunities from personal professional development, mentoring, and also the ability to work at different business areas do help in developing my knowledge and skills."]}
                    />
                    <IntroLeft name="Terri Soar" position="" image="/Kavita_Sher.png" twitter="" linkedin="" words={["I’m a creative, versatile, and highly motivated self-starter focused on maximizing business objectives to ensure business performance, productivity, profitability and growth. My role in LeapSheep is to prepare various statements and reports, dashboards, process internal communications, and manage and update databases."]}
                    />
                    <IntroRight name="Prakash Mehta" position="" image="/Prakash Mehta.png" twitter="" linkedin="" words={["I have extensive knowledge in the field of Business Operations, Analysis, Technology and in dealing with complex projects, and I have comprehensive experience in corporate based business operation.","My role in LeapSheep is assisting with backend support and ensuring organizational high standards are met. I have a commitment to company goals by producing a positive and tangible impact in a fast-paced and rapidly changing environment"]}
                    />

                </Grid>

            </Container>
        </div>
    )
}

export default Team;