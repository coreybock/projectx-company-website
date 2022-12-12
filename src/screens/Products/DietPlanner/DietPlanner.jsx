import React from "react";
import * as s from "./DietPlanner.style";
import HomeVideo from "@Assets/videos/connections.mp4";
import ProductVideoSrc from "@Assets/videos/dietplanapplication.mp4";
import ProductImage from "@Components/ProductImage/ProductImage";

import Pic1 from "@Assets/images/products/dietplanner/dietplanapp-1.jpg";
import Pic2 from "@Assets/images/products/dietplanner/dietplanapp-2.jpg";
import Pic3 from "@Assets/images/products/dietplanner/dietplanapp-3.jpg";
import Pic4 from "@Assets/images/products/dietplanner/dietplanapp-4.jpg";


const DietPlanner = () => {

    return (
        <s.ProductContainer>
            <s.ProductInnerContainer>
                <s.ProductTop>
                    <s.ProductRow>
                        <s.ProductPageHeader>Diet Planner App</s.ProductPageHeader>
                        <s.ProductPageText>Elderly diet planner application</s.ProductPageText>
                    </s.ProductRow>
                    <s.PageVideo src={HomeVideo} width="100%" controls={false} autoPlay={true} loop={true} muted={true}/>
                </s.ProductTop>
                <s.ProductContentRowGradient>
                    <s.ProductContentRowInner>
                        <s.ProductContentLeft>
                            <s.ProductTitle>
                                Product <br/> <span style={{color:"white"}}>Overview</span>
                            </s.ProductTitle>
                            <s.ProductText style={{color:"white"}}>
                                Team Task Force X’s product focuses on providing the tools seniors require to their independence through nutrition advice and tracking. We aim to help maintain or even improve the health of our users. The phone application, ‘NutriHelp’ will help users track their nutrition and find diet plans which fit their current health issues or concerns. This empowerment to take control of their nutritional health will assist in reducing unnecessary GP visits due to nutrition-related complications and prevent some additional issues arising.<br/><br/>
                                Our mobile app will take user entered data, including logged food and basic health details, and use this to generate dieting recommendations. With aging comes changes in what our bodies require and here at Team Task Force X, we hope to keep people healthier for longer.
                            </s.ProductText>
                        </s.ProductContentLeft>
                        <s.ProductContentRight>
                            <s.ProductVideo src={ProductVideoSrc} controls={true} />
                        </s.ProductContentRight>
                    </s.ProductContentRowInner>
                </s.ProductContentRowGradient>
                <s.ProductContentRow>
                    <s.ProductContentRowInner>
                        <s.ProductContent>
                            <s.ProductTitle style={{color:"rgb(92, 118, 141)"}}>
                                Product <span style={{color:"rgb(26, 180, 252)"}}>Features</span>
                            </s.ProductTitle>
                            <s.ProductSubColumns>
                                <s.ProductText>
                                    <s.FeatureList>
                                        <li>Monitoring and profiling patient activities.</li>
                                        <li>Alerting caregivers and supervisors during an emergency.</li>
                                        <li>Predicting potential physical and mental health conditions at an early stage.</li>
                                    </s.FeatureList>
                                </s.ProductText>
                                <s.ProductText>
                                    <s.FeatureList>
                                        <li>Providing suggestions to see a health professional based on health issue detected.</li>
                                        <li>Encouraging positive activities.</li>
                                        <li>Generating weekly and monthly activity dashboard.</li>
                                    </s.FeatureList>
                                </s.ProductText>
                                <s.ProductText>
                                    <s.FeatureList>
                                        <li>Providing access to accurate real-time visualisation and position of patient(s).</li>
                                        <li>Ability to define a baseline for a patient.</li>
                                        <li>User management allowing for defining Patient, Carer, and Admin users.</li>
                                    </s.FeatureList>
                                </s.ProductText>
                            </s.ProductSubColumns>
                        </s.ProductContent>
                    </s.ProductContentRowInner>
                </s.ProductContentRow>
                <s.ProductContentRowGradient>
                    <s.ProductContentRowInner style={{width:'100%'}}>
                        <s.ProductContent style={{display:'flex', flexDirection: 'column', width:'100%'}}>
                            <s.ProductTitleWhite style={{paddingBottom:"5px"}}>
                                <span style={{color:"rgb(10,30,56)"}}>Product</span> Benefits
                            </s.ProductTitleWhite>
                            <s.ProductSubColumnsWhite>
                                <s.ProductText style={{maxWidth:"100%"}}>
                                    <strong>Convenient, Accurate, Tailored</strong><br/><br/>After the user enters his basic information, our program employs machine learning to formulate a standard diet plan for the user. This is based on the current health of the client and what they need from the food they consume. It will tell the user what and how much they need, along with what foods contain it. The user’s experience is at the core of our product, ensuring goals and recipes are at your fingertips, ready when you are.
                                </s.ProductText>
                            </s.ProductSubColumnsWhite>
                        </s.ProductContent>
                    </s.ProductContentRowInner>
                </s.ProductContentRowGradient>
                <s.ProductContentRow style={{backgroundColor:"rgb(10,30,56)"}}>
                    <s.ProductContentRowInner style={{width:'100%'}}>
                        <s.ProductContent style={{display:'flex', flexDirection: 'column', width:'100%'}}>
                            <s.ProductTitle style={{color:"white", paddingBottom:"50px"}}>
                                Product Images
                            </s.ProductTitle>
                            <s.ProductSubColumns style={{justifyContent:"space-between"}}>
                                <ProductImage image={Pic1} />
                                <ProductImage image={Pic2} />
                                <ProductImage image={Pic3} />
                                <ProductImage image={Pic4} />
                            </s.ProductSubColumns>
                        </s.ProductContent>
                    </s.ProductContentRowInner>
                </s.ProductContentRow>
            </s.ProductInnerContainer>
        </s.ProductContainer>

    );
};

export default DietPlanner;
